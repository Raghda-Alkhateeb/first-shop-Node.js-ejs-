
import  {Product}  from "../models/productModels.mjs";
import 'dotenv/config'; 
import { Category } from "../models/category.mjs";
// * as P
   
export async function getProducts(req,res) {
    let validationError = req.flash('validationError')[0]
      try {
        let categorys = await Category.find();
        let category=req.query.category;
        let categoryId = await Category.findOne({name:category})
        console.log(categoryId);
      
        console.log(category);
       
        if(category && category!== "ALL")
        {
            let p = await Product.find({
                category : categoryId._id
            }); 

              
            res.render("index",{
                products:p,
                categorys:categorys,
                isUser: req.session.userId,
                validationError:validationError
            })
        }
        else{
          let  p = await Product.find(); 
          res.render("index",{
              products:p,
              categorys:categorys,
              isUser: req.session.userId,
              validationError:validationError
          })
        }
        
        
    } catch (error) {
        console.log(error);
    }


}



export async function getProduct(req,res) {
    try {
      let id=req.params.id;
      
        let  p = await Product.findById(id); 
        console.log(process.env.myLocal)
        res.render("product",{
            product:p,
            myLocal: process.env.myLocal,
            isUser: req.session.userId
        })
      }
      
      
  catch (error) {
      console.log(error);
  }


}

