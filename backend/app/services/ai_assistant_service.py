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
        keywords = user_message.lower().split()
        product_query = select(Product).limit(5)
        
        # Simple match if query has product terms
        if any(k in user_message.lower() for k in ["headphone", "phone", "laptop", "watch", "shoe", "shirt", "soundbar", "tv"]):
            for kw in ["headphone", "phone", "laptop", "watch", "shoe", "shirt", "soundbar", "tv"]:
                if kw in user_message.lower():
                    term = f"%{kw}%"
                    product_query = select(Product).where(
                        or_(
                            func.lower(Product.title).like(term),
                            func.lower(Product.brand).like(term)
                        )
                    ).limit(4)
                    break

        prod_res = await db.execute(product_query)
        matching_products = prod_res.scalars().all()

        recommended_cards = [
            {
                "id": p.id,
                "title": p.title,
                "slug": p.slug,
                "brand": p.brand,
                "price": p.discount_price or p.base_price,
                "rating": p.rating,
                "image": p.primary_image
            }
            for p in matching_products
        ]

        # Check if query is about order status
        order_info = ""
        if user_id and ("order" in user_message.lower() or "track" in user_message.lower() or "delivery" in user_message.lower()):
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
                You are Rufus, Cartify's AI Shopping Assistant. Be helpful, concise, friendly, and expert.
                Always express prices in Indian Rupees (₹).
                User Question: "{user_message}"
                {order_info}
                Available Cartify Catalog Products:
                {catalog_context}
                
                Provide a helpful e-commerce response recommending relevant products if applicable.
                """
                response = client.models.generate_content(
                    model=settings.GEMINI_MODEL,
                    contents=prompt
                )
                assistant_reply = response.text.strip()
            except Exception as e:
                # Fallback to catalog response
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
                return f"Here is the latest update on your order! {order_info}\nNeed to make changes or return an item? I can assist you right away!"
            return "I can help you track your package! Please make sure you are logged in to your Cartify account or check the Orders section in your profile dashboard."
        
        if "coupon" in q_lower or "discount" in q_lower or "deal" in q_lower:
            return "🎉 Great news! You can use code **WELCOME15** for 15% off your first order (min ₹500), or **FREESHIP** for free express shipping. Try entering them at checkout!"

        if "return" in q_lower or "refund" in q_lower or "policy" in q_lower:
            return "Cartify offers a hassle-free 7-day no-questions-asked return policy! Simply open your Orders tab, click 'Request Return', and our courier partner will pick up the item at no cost to you."

        if products:
            prod_names = ", ".join([p["title"] for p in products[:3]])
            return f"I found some top-rated options on Cartify for you! Check out **{prod_names}**. They feature top customer reviews, warranty coverage, and 2-day express delivery."

        return "Hi there! I'm **Rufus**, your AI Shopping Assistant at Cartify. I can help you find products, compare specs, check active coupons, track orders, or answer return policies. What can I help you find today?"
