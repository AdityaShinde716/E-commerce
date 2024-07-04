import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import userRouter from "./Routes/user.js";
import productRouter from "./Routes/product.js";
import cartRouter from "./Routes/cart.js";
import addressRouter from "./Routes/address.js";
import paymentRouter from "./Routes/payment.js";
import cors from "cors";

const app = express();

app.use(bodyParser.json());

app.use(cors({
    origin:true,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

app.get("/",(req,res)=>res.json({message:"This is home route"}));

app.use("/api/user",userRouter);

app.use("/api/product",productRouter);

app.use("/api/cart",cartRouter);

app.use("/api/address",addressRouter);

app.use("/api/payment",paymentRouter);

mongoose.connect(
    "mongodb+srv://shindeadi716:IhOdIPgSp0YMqTux@cluster0.9rrj9ve.mongodb.net/",{
        dbName:"ecommerce"
    }
).then(()=>console.log(`database is connected`)).catch((err)=>console.log(err));

const port = 1000;

app.listen(port,()=>
    console.log(`server is listening at ${port}`

))