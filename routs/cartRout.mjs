import express from "express";
import { check }from 'express-validator';
import { creatCart } from "../controllers/cartController.mjs";
import { isAuth } from "./guards/auth-guard.mjs";

export const cartRout = express.Router();

cartRout.post('/', isAuth,
check('amount').not().isEmpty().withMessage('amount is requier')
.isInt({ min:1 }).withMessage('amount must be grater than 0'),
creatCart )

