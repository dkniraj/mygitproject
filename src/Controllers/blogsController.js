const blogsmodel = require("../Models/blogsModel")


const createblogs = async function (req,res){
try {
    let data = req.body 
    let title = req.body.title
    if (!title){
        res.status(400).send({status:false ,msg:"tittle is required"})
    }
    let blog = await blogsmodel.create(data)

    return res.status(201).send ({msg: blog})

} catch (error) {
    res.status(500).send({msg:error.message})
}
}

const getblogs = async function (req,res){

    try {
        
        const authorID = req.query.author
        const category = req.query.category
        const tags = req.query.tags
        const subcategory = req.query.subcategory

        const filteredblogs = {}
    
        if (authorID){
            filteredblogs.authorid = authorID
        }
        if (category){
            filteredblogs.category = category
        }
        // if (tags){
        //     filteredblogs.tags = tags
        // }
    

        let blogs = await blogsmodel.find({isdeleted:false,isPublished:true})

        let Filter = await blogsmodel.find(filteredblogs||category)


        if (filter){
        return res.status(200).send ({msg: filter})

        }else res.status(404).send ("data not found") 
        
    
    } catch (error) {
        res.status(500).send({msg:error.message})
    }
}

module.exports.createblogs = createblogs
module.exports.getblogs = getblogs