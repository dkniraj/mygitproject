const { default: mongoose } = require("mongoose")
const blogsModel = require("../Models/blogsModel")



let validation = async function(req,res,next){
    let authorid = req.body.authorid

    let blogs = await blogsModel.create(blogsModel)

    if (!authorid){
        return res.status(400).send({satus:false, msg: " authorid is not present"})
    }  
    
    if (!mongoose.SchemaType.ObjectId.isValid(authorid)){
        return res.send.status(400).send({satus:false, msg: "authorid is not valid"})
    }

    res.send 



}