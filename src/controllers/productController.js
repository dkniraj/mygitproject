const productmodel=require("../model/productModel")
const productModel = require("../models/productModel")

create product=async function (req,res){

    const{name,category,price}=req.body


    if(!name||!category||!price){
        return res.send("all field name,category,and price are mandatory field")

    }

    let productDetails=await productModel.create({name,category,price})
}

module.exports.createProduct=createProduct