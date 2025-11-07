import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  userId: { type: String, default: "demo_user" },

  // ✅ Product reference (important!)
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },

  qty: { type: Number, default: 1 }
});

export default mongoose.model("CartItem", cartItemSchema);
