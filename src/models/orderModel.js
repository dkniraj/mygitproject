const mongoose=require('mongoose');

const orderschema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    isFreeappUser:{
        type:Boolean,
        required:true
    },
    date:Date
},{timestamps:true});