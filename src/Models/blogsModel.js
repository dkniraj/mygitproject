
const { default: mongoose, Mongoose } = require("mongoose");
const { isDate } = require("util/types");
const ObjectId =mongoose.Schema.Types.ObjectId
// const author = require("./authormodel")

// const moment = re

const blogsSchema = new mongoose.Schema({
    title : {type: String,
            required : true},

    body : {type: String,
            required:true},

    authorid: {type: ObjectId,
            ref : "author",
            required : true },

    tags: {type: [String]}, 


    category: {type : String,
                required: true},

    subcategory: {type : [String],
        required: true},

    deletedAt : {type:Date},
    
    isdeleted : {type : Boolean, default:false},

    // publishedAt :[Date],

    isPublished : {type:Boolean,default:false}



},
{timestamps: true})



module.exports = mongoose.model("Blogs" , blogsSchema)