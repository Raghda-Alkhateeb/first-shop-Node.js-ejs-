import express from "express";
import path from "path";
import 'dotenv/config';
import session from 'cookie-session';
// import session from 'express-session';
import  flash  from 'connect-flash';
//import mongoose from 'mongoose'
import { runApp } from "./models/connectDB.mjs";

import { fileURLToPath } from "url";
import { dirname } from "path";
import { homRout} from "./routs/homeRout.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const  app = express();
app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: 'MyTopSecret!!'
}));

app.use(flash());
app.use(express.static(path.join(__dirname,"images")));
app.set('view engine','ejs')
app.set('views','views')

runApp();
app.use('/',homRout)

app.use(express.static(path.join(__dirname,"assets")));


app.listen(3000,(err)=>{
    console.log(err)
    console.log('Server running at http://localhost:3000');
})
