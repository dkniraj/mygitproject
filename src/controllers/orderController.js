const { isValidObjectId } = require("mongoose")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")
const { findById } = require("../models/userModel")

const createOrder=async function(req,res){

    const {productId,userId}=req.body

    if(!productId||!userId){
        return res.send({message:"productId and userId is mandatory"})
    }

    if (!isValidObjectId(productId)){
        return res.send({message:"userId is not a valid ObjectId"})

    }
    const userDetails=await userModel.findById(userId)

    if(!userDetails){
        return res.send({message:"user is not present"})
    }
    const productDetails=await productModel.findById(productID)

    if(!userDetails){
        return res.send({message:"user is not present"})
    }
    
    const productDetails=await productModel.findById(productId)

    if (!productDetails) {
        return res.send({message:"product is not present"})
    }

    const isFreeAppUser=req.isFreeAppUser

    if (is FreeAppUser){

        const order=await orderModel.create({
            userId:userId,
            productId:productId,
            amount:0,
            isFreeAppUser:isFreeAppUser,
            date;new Date()
        })
        return res.send({data:order})
    }else {
        if (userDetails.balance<productDetails.price){
            return res.send({message:"you dont have suficient balance"})
        }

        const orderDetails={
            userId:userId,
            amount:productDetails.price,
            isFreeAppUser:isFreeAppUser,
            date:new Date()
        }

        const order =await orderModel.create(orderDetals)

        const user =await userModel.findByIdAndUpdate(userId,{balance: productDetails.price})
        return res.send({data:order})
    }
    
}

module.exports.createOrder=createOrder