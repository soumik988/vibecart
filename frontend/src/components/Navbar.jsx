import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function Navbar({ cartCount }) {
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold tracking-wide">
        VibeCart
      </Link>

      <div className="flex items-center gap-8 text-lg">
        <Link to="/products" className="hover:text-purple-400 transition">Products</Link>

        <Link to="/cart" className="relative">
          <ShoppingCart size={26} className="hover:text-purple-400 transition" />

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-purple-600 text-white text-xs px-2 py-[2px] rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
