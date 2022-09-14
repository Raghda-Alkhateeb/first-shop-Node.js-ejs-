import express from "express";
import { check }from 'express-validator'
import { createNewUser, postLogin } from "../controllers/userController.mjs";
import { notAuth } from "./guards/auth-guard.mjs";

export const authRout = express.Router();

authRout.get("/signup",notAuth, (req, res) => {
  res.render("signup",{
    validationError:req.flash('validationError')
  });
});
authRout.post("/signup",notAuth,
check('userName')
.not().isEmpty().withMessage('User Name is require') ,
check('email')
.not().isEmpty().withMessage('email is require')
.isEmail().withMessage('email is Invalid value') ,
check('password')
.not().isEmpty().withMessage('Password is require')
.isLength({min:6}).withMessage('must be at least 6 chars long'),
check('confirmPassword').custom((value,{req})=>{
  if(value == req.body.password) 
  return true;
  else throw "Password confirmation is incorrect";
})
,createNewUser);

authRout.get("/login",notAuth, (req, res) => {
  let message = req.flash('error');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render('login', {
        title: "Login Page",
        errorMessage: message,
       
    });
});

authRout.post("/login",
check('email')
.not().isEmpty().withMessage('email is require')
.isEmail().withMessage('email is Invalid value') ,
check('password')
.not().isEmpty().withMessage('Password is require')
.isLength({min:6}).withMessage('must be at least 6 chars long')
,postLogin);

authRout.all("/logout", (req, res) => {
    req.session = null;
    res.redirect('/auth/login');
});
