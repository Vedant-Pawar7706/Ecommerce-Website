# Cartify | Enterprise E-Commerce Platform & AI Rufus Assistant

**Cartify** is a production-ready, enterprise-grade, fully functional e-commerce platform built with a modern scalable architecture. It combines a high-performance **FastAPI (Python 3.13+)** backend with SQLAlchemy 2.0 async ORM and an ultra-premium **React 19 + Vite + TypeScript + Tailwind CSS** frontend.

---

## 🌟 Key Architecture & Features

### 1. Ultra-Premium UI & Design System
- **Dark Mode Aesthetic**: Custom glassmorphic panels, glowing brand highlights, smooth Framer Motion micro-animations.
- **360° Interactive Product Viewer**: Rotate 3D product models in real-time.
- **Search Autocomplete & Voice Trigger**: Live search matching title, brand, and SKU with voice input support.
- **Product Spec Comparison Tool**: Side-by-side spec and price matrix.

### 2. AI Shopping Assistant ("Rufus AI")
- Powered by **Google Gemini API** integration with conversation memory.
- Natural language catalog RAG search, active coupon hints, order tracking status lookups, and interactive product cards rendered directly inside chat messages.

### 3. Comprehensive Domain Modules & Multi-Role Support
- **Customer Portal**: Order history with live shipment tracking timeline, saved address manager, Cartify Wallet & reward coins.
- **Seller Dashboard**: Inventory management, stock level updates, product catalog creation.
- **Admin Executive Hub**: Executive metrics with **Recharts** (revenue trends area charts, category distribution pie charts, system health stats).

### 4. Dual Database Architecture Out-Of-The-Box
- **PostgreSQL Ready**: Production async database configuration.
- **Zero-Dependency SQLite Fallback**: Automatic auto-seeding SQLite database fallback for immediate local testing and zero setup overhead.

---

## 🚀 Quick Start Guide

### Prerequisites
- Python 3.10+
- Node.js 18+

### Step 1: Run Backend (FastAPI)

```bash
cd backend
pip install -r requirements.txt
python main.py
```

- **Backend API**: `http://localhost:8000`
- **Interactive Swagger OpenAPI Docs**: `http://localhost:8000/docs`
- **Health Check**: `http://localhost:8000/health`

### Step 2: Run Frontend (React 19 + Vite)

```bash
cd frontend
npm install
npm run dev
```

- **Frontend App**: `http://localhost:3000`

---

## 🐳 Docker Deployment

To launch all containers (Frontend, Backend, PostgreSQL, Redis) with Docker Compose:

```bash
docker-compose up --build
```

---

## 🔑 Default Seed Credentials

The application automatically seeds 25+ realistic products across major categories, active promo coupons (`WELCOME15`, `FREESHIP`), and test accounts:

| Role | Email | Password |
|---|---|---|
| **Super Admin** | `admin@cartify.com` | `Admin123!` |
| **Seller** | `seller@techhub.com` | `Seller123!` |
| **Customer** | `alex.johnson@example.com` | `Customer123!` |
