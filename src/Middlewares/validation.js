const { default: mongoose } = require("mongoose")
const blogsModel = require("../Models/blogsModel")




let validation = async function(req,res,next){
    let authorid = req.body.authorid

try {
     if (!authorid){
        return res.status(400).send({satus:false, msg: " authorid is not present"})
    }  
    
    if (!mongoose.Types.ObjectId.isValid(authorid)){
        return res.status(400).send({satus:false, msg: "authorid is not valid"})
    }

    next()
} catch (error) {
    res.status(500).send({msg: error.message})
}
   

}

module.exports.validation = validation