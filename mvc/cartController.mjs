import {Cart} from "../models/cart.mjs";
import { validationResult } from "express-validator";

export async function creatCart(req,res){
    if (validationResult(req).isEmpty()) {
    try{
        let newCart = new Cart({
            name: req.body.name,
            price: req.body.price,
            amount: req.body.amount,
            userID: req.session.userId,
            productID: req.body.productId ,
          });
          await newCart.save();
          res.redirect('/cart')

    }
        catch (error) {
            console.log(error =>{
            console.log(error)
            });  
    }}
    else {
        req.flash("validationError", validationResult(req).array());
        res.redirect(req.body.redirectTo);}
}