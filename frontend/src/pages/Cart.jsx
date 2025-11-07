import { useEffect, useState } from "react";

// ✅ same images used in Products.jsx
import headphone from "../assets/products/headphone.webp";
import iphon from "../assets/products/iphon.webp";
import keyboard from "../assets/products/keyboard.webp";
import spker from "../assets/products/spker.webp";
import xppen from "../assets/products/xppen.webp";
import watch from "../assets/products/watch.webp";

const productImages = [headphone, iphon, keyboard, spker, xppen, watch];

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const [showForm, setShowForm] = useState(false);
  const [receipt, setReceipt] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const loadProducts = () => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data.items || []));
  };

  const loadCart = () => {
    fetch("http://localhost:5000/api/cart")
      .then(res => res.json())
      .then(data => {
        setCart(data.items || []);
        setTotal(data.total || 0);
      });
  };

  useEffect(() => {
    loadProducts();
    loadCart();
  }, []);

  const updateQty = async (id, qty) => {
    if (qty < 1) return;
    await fetch(`http://localhost:5000/api/cart/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ qty })
    });
    loadCart();
  };

  const removeItem = async (id) => {
    await fetch(`http://localhost:5000/api/cart/${id}`, { method: "DELETE" });
    loadCart();
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email })
    });
    const data = await res.json();
    setReceipt(data.receipt);
    setShowForm(false);
    loadCart();
  };

  return (
    <div className="w-full min-h-screen bg-[#0f0f10] text-white p-8">
      <h2 className="text-3xl font-bold mb-6">My Cart</h2>

      {/* ✅ Receipt Modal */}
      {receipt && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#18181c] p-6 rounded-2xl border border-gray-700 w-[90%] max-w-lg">
            <h3 className="text-2xl font-bold mb-3">Order Receipt</h3>

            <p className="text-gray-400 text-sm mb-4">
              Order ID: <span className="text-purple-400 font-medium">{receipt.id}</span><br />
              {new Date(receipt.timestamp).toLocaleString()}
            </p>

            <div className="space-y-2 max-h-56 overflow-auto mb-4">
              {receipt.items.map((i) => {
                const name = i.productId?.name ?? i.name;
                const price = i.productId?.price ?? i.price;
                return (
                  <div key={i._id} className="flex justify-between bg-[#222] p-2 rounded-lg text-sm">
                    <span>{i.qty} × {name}</span>
                    <span>₹{price * i.qty}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-between text-lg font-semibold mb-6">
              <span>Total</span>
              <span className="text-purple-400">₹{receipt.total}</span>
            </div>

            <button
              className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg"
              onClick={() => setReceipt(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ✅ Cart Items */}
      {cart.length > 0 ? (
        <div className="space-y-4 mb-8">
          {cart.map((item) => {
            const p = item.productId;
            const index = products.findIndex(prod => prod._id === p?._id);
            const imgSrc = productImages[index] || headphone;

            return (
              <div key={item._id} className="flex items-center justify-between bg-[#18181c] p-4 rounded-xl border border-gray-700">
                <img src={imgSrc} className="w-16 h-16 object-cover rounded-lg" />

                <div className="flex-1 ml-4">
                  <h4 className="text-lg font-semibold">{p?.name}</h4>
                  <p className="text-gray-400">₹{p?.price}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button onClick={() => updateQty(item._id, item.qty - 1)} className="px-3 text-xl bg-gray-700 rounded">-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item._id, item.qty + 1)} className="px-3 text-xl bg-gray-700 rounded">+</button>
                </div>

                <button onClick={() => removeItem(item._id)} className="text-red-400 text-lg ml-3">🗑</button>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-400 text-lg">Your cart is empty.</p>
      )}

      {/* ✅ Total & Checkout Button */}
      {cart.length > 0 && !showForm && (
        <>
          <div className="flex justify-between text-2xl font-bold mb-6">
            <span>Total</span>
            <span className="text-purple-400">₹{total}</span>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl text-lg"
          >
            Proceed to Checkout
          </button>
        </>
      )}

      {/* ✅ Checkout Form */}
      {showForm && (
        <form onSubmit={handleCheckout} className="mt-8 max-w-lg p-6 bg-[#18181c] border border-gray-700 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Checkout</h3>

          <input
            required
            placeholder="Your Name"
            className="w-full bg-[#0f0f10] border border-gray-700 p-3 rounded-lg mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            required
            placeholder="Your Email"
            className="w-full bg-[#0f0f10] border border-gray-700 p-3 rounded-lg mb-6"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg text-lg">
            Pay ₹{total} (Mock)
          </button>
        </form>
      )}
    </div>
  );
}
