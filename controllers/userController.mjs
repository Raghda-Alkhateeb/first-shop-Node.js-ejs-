import { User } from "../models/user.mjs";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";

export async function createNewUser(req, res) {
  //check if email exists
  //     if( await User.findOne({email:email}))
  //    { let msg="Email is Used";}
  //    else{
  if (validationResult(req).isEmpty()) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);
      let newUser = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: hashedPass,
      });
      // console.log(req.body.userName);
      await newUser.save();
      res.redirect("/auth/login");
    } catch (error) {
      console.log(error);
      res.redirect("/auth/signup");
    }
  } else {
    req.flash("validationError", validationResult(req).array());
    res.redirect("/auth/signup");
  }

  //    }
}

export async function postLogin(req, res) {

    //check if email
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email: email });
    console.log(user)
    // const salt = await bcrypt.genSalt(10);
    // const hashedPass = await bcrypt.hash(password, salt);
    const validPass = await bcrypt.compare(password, user.password);
    console.log(validPass)
    console.log(user.password)
    console.log(validPass)
 
   
    if (user && validPass) {
        req.session.userId = user.id;
        res.redirect('/');
       
    } else {
        req.flash('error', 'Invalid email or password');
        res.redirect('/auth/login');
    }
   
}
