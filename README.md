## 🛍 Product Page
![Product Page](https://github.com/soumik988/vibecart/blob/8bb409d5b69f4ed68007e8e50948e597c8b34b46/Screenshot%202025-11-07%20195717.png)
![Product Page](https://github.com/soumik988/vibecart/blob/8bb409d5b69f4ed68007e8e50948e597c8b34b46/Screenshot%202025-11-07%20195728.png)

## 🧺 Cart Page
![Cart Page](https://github.com/soumik988/vibecart/blob/8bb409d5b69f4ed68007e8e50948e597c8b34b46/Screenshot%202025-11-07%20195810.png)
![Cart Page](https://github.com/soumik988/vibecart/blob/8bb409d5b69f4ed68007e8e50948e597c8b34b46/Screenshot%202025-11-07%20195819.png)





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







