import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    amount: Number,
    userID: String,
    productID: String ,  
  },
  { timestamps: true }
);

export const Cart = mongoose.model("Cart", CartSchema, "carts");
