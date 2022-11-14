
const { default: mongoose } = require("mongoose");
const { boolean } = require("webidl-conversions");
const ObjectId =mongoose.Schema.Types.ObjectId
// const author = require("./authormodel")

const blogsmodel = new mongoose.Schema({
    title : {type: String,
            required : true},

    body : {type: String,
            required:true},

    authorid: {type: ObjectId,
            ref : author,
            required : true },

    tags: {type: [String]}, 


    category: {type : String,
                required: true},

    subcategory: {type : [String],
        required: true},

    deletedAt :{type:Date},
    
    isdeleted : {type : boolean, default:false},

    publishedAt : {type: Date},

    isPublished : {type:boolean,default:false}


},
{timestamps: true})



module.exports = mongoose.model("Blogs" , blogsmodel)