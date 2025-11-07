import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import headphone from "../assets/products/headphone.webp";
import iphon from "../assets/products/iphon.webp";
import keyboard from "../assets/products/keyboard.webp";
import spker from "../assets/products/spker.webp";
import xppen from "../assets/products/xppen.webp";
import watch from "../assets/products/watch.webp";

const productImages = [
  headphone,
  iphon,
  keyboard,
  spker,
  xppen,
  watch
];

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data.items || []));
  }, []);

  const addToCart = async (id) => {
    await fetch("http://localhost:5000/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: id, qty: 1 })
    });

    toast.success("✅ Added to Cart");
  };

  return (
    <div className="px-8 py-10 text-white bg-[#0f0f10] min-h-screen">
      <h1 className="text-center text-4xl font-bold mb-2 tracking-wide">Discover Our Collection</h1>
      <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
        Premium picks for everyday performance & style.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((p, i) => (
          <div
            key={p._id}
            className="bg-[#18181c] border border-gray-700 rounded-2xl shadow-[0_0_25px_rgba(80,0,255,0.2)] hover:shadow-[0_0_45px_rgba(120,0,255,0.4)] transition-all hover:-translate-y-2 hover:scale-[1.03] duration-300 flex flex-col"
          >
            <div className="w-full h-64 overflow-hidden rounded-t-2xl">
              <img
                src={productImages[i % productImages.length]}
                alt={p.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-gray-400 mt-2 text-sm">A stylish product for everyday use.</p>

              <div className="mt-auto flex justify-between items-center pt-4">
                <span className="text-purple-400 font-bold text-2xl">₹{p.price}</span>

                <button
                  onClick={() => addToCart(p._id)}
                  className="bg-purple-600 px-5 py-2 rounded-xl hover:bg-purple-700 transition active:scale-95 text-white"
                >
                  + Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
