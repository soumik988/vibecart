## 🛍 Product Page
![Product Page]()

## 🧺 Cart Page
![Cart Page]()





# VibeCart — Mock E-Commerce Cart Application

This project is a full-stack shopping cart built as part of the Vibe Commerce Internship Assignment.  
It demonstrates product listing, cart management, checkout workflow, receipt generation, and responsive UI design.

---

## 🚀 Tech Stack

| Layer | Technology |
|------|------------|
| Frontend | React (Vite) + TailwindCSS |
| Backend | Node.js + Express.js |
| Database | MongoDB (Atlas) |
| API Style | REST APIs |

---

## 📁 Project Structure
/vibecart
├── /backend
│ ├── src
│ │ ├── models/
│ │ ├── controllers/
│ │ ├── routes/
│ │ ├── config/
│ │ └── server.js
│ ├── .env
│ └── package.json
│
└── /frontend
├── src
│ ├── pages/
│ ├── components/
│ ├── assets/
│ └── App.jsx
├── index.html
└── package.json

---

## 🛠 Backend Setup

```bash
cd backend
npm install
PORT=5000
MONGO_URI=your mongodb connection url
npm run dev


| Method | Endpoint        | Description                     |
| ------ | --------------- | ------------------------------- |
| GET    | `/api/products` | Fetch product list              |
| POST   | `/api/cart`     | Add item `{ productId, qty }`   |
| GET    | `/api/cart`     | Get cart items & total          |
| PATCH  | `/api/cart/:id` | Update quantity                 |
| DELETE | `/api/cart/:id` | Remove item                     |
| POST   | `/api/checkout` | Mock checkout → returns receipt |



cd frontend
npm install
npm run dev


| Feature                                           | Status |
| ------------------------------------------------- | ------ |
| Product Catalog Grid                              | ✅      |
| Add to Cart                                       | ✅      |
| Update Quantity                                   | ✅      |
| Remove Items                                      | ✅      |
| Auto-Calculated Total                             | ✅      |
| Checkout Form (Name + Email)                      | ✅      |
| Receipt Modal (Order ID, Items, Total, Timestamp) | ✅      |
| Data Persisted to MongoDB                         | ✅      |
| Fully Responsive UI                               | ✅      |







