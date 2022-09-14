import express from "express";
import { getProduct } from "../controllers/productController.mjs";

export const productRout = express.Router();
productRout.get('/:id',getProduct)
