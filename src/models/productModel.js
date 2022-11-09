const mongoose =require('mongoose');
const { stringify } = require("nodemon/lib/utils");

const productschema=new mongoose.Schema({
    name:{
        type:string,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
},{timestamps:true});

module.exports=mongoose.model('product',productschema)