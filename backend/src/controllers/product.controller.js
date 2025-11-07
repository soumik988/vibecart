import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const items = await Product.find();
    return res.json({ items });
  } catch (err) {
    return res.status(500).json({ message: "❌ Failed to fetch products" });
  }
};

export const seedProducts = async (req, res) => {
  try {
    console.log("⏳ Seeding products...");

    // ✅ Always clear old products first
    await Product.deleteMany({});

    // ✅ Insert your real product list
    await Product.insertMany([
      { name: "Headphone", price: 499 },
      { name: "iPhone", price: 85999 },
      { name: "Mechanical Keyboard", price: 2299 },
      { name: "Bluetooth Speaker", price: 1499 },
      { name: "XP-Pen Tablet", price: 6999 },
      { name: "Smart Watch", price: 1999 },
    ]);

    return res.json({ message: "✅ Products Seeded Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "❌ Seeding Failed" });
  }
};
