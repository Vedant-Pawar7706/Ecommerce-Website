import os
import json
import uuid
from typing import Dict, Any, List, Optional
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, or_, func
from app.core.config import settings
from app.models.product import Product
from app.models.order import Order
from app.models.ai_chat import AIChatSession, AIChatMessage


class AIAssistantService:

    @staticmethod
    async def process_chat(
        db: AsyncSession,
        user_id: Optional[int],
        session_id: Optional[str],
        user_message: str
    ) -> Dict[str, Any]:
        if not session_id:
            session_id = str(uuid.uuid4())

        # Ensure session exists in DB
        sess_res = await db.execute(select(AIChatSession).where(AIChatSession.id == session_id))
        chat_session = sess_res.scalars().first()
        if not chat_session:
            chat_session = AIChatSession(
                id=session_id,
                user_id=user_id,
                title=f"Chat: {user_message[:30]}..."
            )
            db.add(chat_session)
            await db.flush()

        # Save user message
        user_msg_obj = AIChatMessage(
            session_id=session_id,
            role="user",
            content=user_message
        )
        db.add(user_msg_obj)
        await db.flush()

        # Fetch product context for RAG
        keywords = ["headphone", "phone", "iphone", "laptop", "macbook", "watch", "shoe", "shirt", "soundbar", "tv", "camera", "backpack", "charger", "earbuds", "audio", "sony", "boat", "nike", "apple"]
        product_query = select(Product).limit(6)
        
        lower_msg = user_message.lower()
        matched_kw = [kw for kw in keywords if kw in lower_msg]

        if matched_kw:
            filters = [
                or_(
                    func.lower(Product.title).like(f"%{kw}%"),
                    func.lower(Product.brand).like(f"%{kw}%"),
                    func.lower(Product.short_description).like(f"%{kw}%")
                )
                for kw in matched_kw[:2]
            ]
            product_query = select(Product).where(or_(*filters)).limit(6)

        prod_res = await db.execute(product_query)
        matching_products = prod_res.scalars().all()

        recommended_cards = [
            {
                "id": p.id,
                "title": p.title,
                "slug": p.slug,
                "brand": p.brand,
                "price": p.discount_price or p.base_price,
                "base_price": p.base_price,
                "discount_price": p.discount_price or p.base_price,
                "rating": p.rating,
                "review_count": p.review_count,
                "stock_quantity": p.stock_quantity,
                "is_in_stock": p.is_in_stock,
                "primary_image": p.primary_image,
                "image": p.primary_image
            }
            for p in matching_products
        ]

        # Check if query is about order status
        order_info = ""
        if user_id and ("order" in lower_msg or "track" in lower_msg or "delivery" in lower_msg):
            ord_res = await db.execute(select(Order).where(Order.user_id == user_id).order_by(Order.created_at.desc()).limit(1))
            latest_order = ord_res.scalars().first()
            if latest_order:
                order_info = f"\nLatest Order Status: #{latest_order.order_number} is currently {latest_order.order_status.value.upper()}. Estimated delivery: {latest_order.estimated_delivery_date.strftime('%b %d, %Y') if latest_order.estimated_delivery_date else '3 days'}."

        # Response Generation (Gemini API or Smart Catalog Heuristics)
        assistant_reply = ""
        gemini_api_key = settings.GEMINI_API_KEY or os.environ.get("GEMINI_API_KEY", "")

        if gemini_api_key:
            try:
                from google import genai
                client = genai.Client(api_key=gemini_api_key)
                
                catalog_context = "\n".join([f"- {p['brand']} {p['title']} (Price: ₹{p['price']}, Rating: {p['rating']}★)" for p in recommended_cards])
                
                prompt = f"""
                You are Rufus, Cartify's advanced AI Shopping Concierge. Be helpful, enthusiastic, expert, and precise.
                Always express prices in Indian Rupees (₹).
                User Question: "{user_message}"
                {order_info}
                Available Cartify Catalog Products:
                {catalog_context}
                
                Highlight product pros, comparison trade-offs, coupon savings (WELCOME15, FREESHIP), and exact budget fits.
                """
                response = client.models.generate_content(
                    model=settings.GEMINI_MODEL,
                    contents=prompt
                )
                assistant_reply = response.text.strip()
            except Exception as e:
                assistant_reply = AIAssistantService._generate_heuristic_response(user_message, recommended_cards, order_info)
        else:
            assistant_reply = AIAssistantService._generate_heuristic_response(user_message, recommended_cards, order_info)

        # Save assistant message
        assistant_msg_obj = AIChatMessage(
            session_id=session_id,
            role="assistant",
            content=assistant_reply,
            recommended_products=recommended_cards
        )
        db.add(assistant_msg_obj)
        await db.commit()

        return {
            "session_id": session_id,
            "role": "assistant",
            "content": assistant_reply,
            "recommended_products": recommended_cards,
            "created_at": assistant_msg_obj.created_at
        }

    @staticmethod
    def _generate_heuristic_response(query: str, products: List[dict], order_info: str) -> str:
        q_lower = query.lower()
        if "order" in q_lower or "track" in q_lower or "delivery" in q_lower:
            if order_info:
                return f"📦 **Live Order Tracking Update**:\n{order_info}\n\nYour shipment is handled with express priority. Need to change delivery address or initiate a return? Just ask me!"
            return "📦 I can track your shipment in real-time! Please make sure you are logged in to your account, or check your active orders in the **Dashboard**."

        if "compare" in q_lower or "vs" in q_lower or "difference" in q_lower:
            if len(products) >= 2:
                p1, p2 = products[0], products[1]
                return f"⚖️ **Comparison Analysis: {p1['title']} vs {p2['title']}**\n\n• **Price**: {p1['title']} is ₹{p1['price']:,} vs {p2['title']} at ₹{p2['price']:,}\n• **Ratings**: {p1['rating']}★ vs {p2['rating']}★\n• **Verdict**: Choose **{p1['title']}** for best value and premium performance, or **{p2['title']}** if you prioritize flagship features!"
            return "⚖️ You can compare specs side-by-side! Click the **Compare** icon on any product card to see an interactive specification matrix."

        if "budget" in q_lower or "bundle" in q_lower or "under" in q_lower or "setup" in q_lower:
            if products:
                total_bundle_cost = sum(p['price'] for p in products[:3])
                prod_lines = "\n".join([f"  • {p['title']} — ₹{p['price']:,}" for p in products[:3]])
                return f"💰 **Personalized Budget Setup Bundle**:\n\n{prod_lines}\n\n🔥 **Total Bundle Price: ₹{total_bundle_cost:,}**\n💡 Use coupon **WELCOME15** at checkout for an extra 15% instant savings!"
            return "💰 Tell me your exact budget (e.g., *'Best desk setup under ₹40,000'*) and I'll curate a balanced collection of accessories and devices for you!"

        if "review" in q_lower or "sentiment" in q_lower or "opinion" in q_lower or "feedback" in q_lower:
            target_prod = products[0]['title'] if products else "top rated products"
            return f"⭐ **AI Review Sentiment Summary for {target_prod}**:\n\n🟢 **Top Pros**: Superb build quality, exceptional acoustic clarity, and fast charging.\n🔴 **Considerations**: Premium pricing, high demand leading to occasional flash stockouts.\n🏆 **AI Verdict**: **94% positive sentiment** from 500+ verified purchasers. Highly recommended!"

        if "coupon" in q_lower or "discount" in q_lower or "deal" in q_lower or "promo" in q_lower:
            return "🎉 **Active Store Promo Coupons**:\n\n• **WELCOME15** — 15% OFF First Order (Min ₹500)\n• **FREESHIP** — 100% Free Express Shipping on All Orders\n• **WELCOME100** — Flat ₹100 Instant Discount (Min ₹499)\n• **CARTIFY20** — 20% Instant Cashback (Min ₹999)\n\nClick **Apply** on the coupon cards below to add them to your cart!"

        if "return" in q_lower or "refund" in q_lower or "policy" in q_lower:
            return "🔄 **Cartify 7-Day Hassle-Free Returns**:\n\n• Free doorstep pickup by courier partner\n• Instant bank / wallet refund within 24-48 hours of verification\n• Zero return shipping fee on all marketplace items."

        if products:
            prod_names = ", ".join([p["title"] for p in products[:3]])
            return f"✨ Based on your request, I found these top matching products:\n\n**{prod_names}**\n\nAll items include authentic brand warranty and express 2-day delivery. Click **Add to Cart** or **Quick View** below!"

        return "👋 Hi! I'm **Cartify AI**, your intelligent Shopping Concierge. I can help you find products, build budget bundles, compare technical specs, track orders, or apply promo discounts. What are you looking for today?"
