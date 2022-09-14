import express from "express";
// import { getHome } from "../controllers/homeController.mjs";
import { getProducts } from "../controllers/productController.mjs";
import { authRout } from "./authRout.mjs";
import { cartRout } from "./cartRout.mjs";
import { productRout } from "./productRouter.mjs";
// import { userRout } from "./userRout.mjs";

export const homRout = express.Router();

homRout.get('/', getProducts)
homRout.use('/product', productRout)
homRout.use('/auth', authRout)
homRout.use('/cart', cartRout)
// homRout.use('/user',userRout)

