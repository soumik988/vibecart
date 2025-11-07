import express from "express";
import { getCart, addToCart, removeItem, updateQty, checkout } from "../controllers/cart.controller.js";

const router = express.Router();

router.get("/", getCart);
router.post("/", addToCart);
router.patch("/:id", updateQty);
router.delete("/:id", removeItem);
router.post("/checkout", checkout);

export default router;
