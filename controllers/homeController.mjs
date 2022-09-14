// import {getProducts} from "./productController.mjs";

//  export  function getHome (req,res){
//     // console.log( getProducts)

//     // res.render('index',{
//     //     products: getProducts()
//     // })
//  }

// try {
//     const { email, password } = req.body;

//     const salt = await bcrypt.genSalt(10);
//     const hashedPass = await bcrypt.hash(password, salt);

//     // const user = User.find(u => (u.email === email && u.password === hashedPass));
//     const user = await User.findOne({ email, hashedPass });
//     if (!user) {
//       res.redirect("/auth/login");
     
//     } else {
//       req.session.user = user.userName;
//       res.redirect("/");
//     }
//   } catch (err) {
//     console.log(err);
//     res.redirect("/auth/login");
//   }

   