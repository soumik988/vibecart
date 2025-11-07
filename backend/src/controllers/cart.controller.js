import CartItem from "../models/CartItem.js";
import Product from "../models/Product.js";
import { nanoid } from "nanoid";

export const getCart = async (req, res) => {
  const items = await CartItem.find({ userId: "demo_user" })
    .populate("productId");  // ✅ Gets name, price, etc.

  const total = items.reduce((sum, item) => sum + item.productId.price * item.qty, 0);

  res.json({ items, total });
};

export const addToCart = async (req, res) => {
  const { productId, qty } = req.body;

  let item = await CartItem.findOne({ userId: "demo_user", productId });

  if (item) {
    item.qty += qty;
    await item.save();
  } else {
    await CartItem.create({
      userId: "demo_user",
      productId,
      qty
    });
  }

  return getCart(req, res);
};

export const updateQty = async (req, res) => {
  await CartItem.findByIdAndUpdate(req.params.id, { qty: req.body.qty });
  return getCart(req, res);
};

export const removeItem = async (req, res) => {
  await CartItem.findByIdAndDelete(req.params.id);
  return getCart(req, res);
};

export const checkout = async (req, res) => {
  const { name, email } = req.body;
  const items = await CartItem.find({ userId: "demo_user" })
    .populate("productId");

  const total = items.reduce((sum, item) => sum + item.productId.price * item.qty, 0);

  const receipt = {
    id: nanoid(8),
    name,
    email,
    items,
    total,
    timestamp: new Date()
  };

  await CartItem.deleteMany({ userId: "demo_user" });

  res.json({ receipt });
};
