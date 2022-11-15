const blogsModel = require("../Models/blogsModel");
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
        res.status(500).send({ msg: error.message })
    }
}

const getblogs = async function (req,res){
    try {

        let data = req.query
        data.isdeleted = false
        data.isPublished=true

        let filtered = await blogsmodel.find(data).populate("authorid")

        if (filtered){
        return res.status(200).send ({msg: filtered})

        }else res.status(404).send ("data not found") 
        
    
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}
const updatedblogs = async function (req, res) {
    try {
        let data = req.body;
        let blogId = req.params.blogId;

        if (Object.keys(data).length == 0)
            return res.status(400).send({ status: false, msg: 'Enter blog Details' })
        if (!blogId)
            return res.status(400).send({ status: false, msg: 'BlogId is missing' })
        let findBlogId = await blogsModel.findById(blogId);
        if (findBlogId.isdeleted == true) {
            return res.status(400).send({ status: false, msg: "Blogs are deleted" })

        }
        let updatedblogs = await blogsModel.findOneAndUpdate({ _id: blogId }, {
            $set: {
                tittle: data.tittle,
                body: data.body,
                publishedAt: new Date(),
                isPublished: true,
            },
            $push: { tags: req.body.tags, subcategory: req.body.subcategory },
        },
            { new: true, upsert: true },
        );
        return res.status(200).send({ status: true, msg: updatedblogs });
    } catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}

const deleted = async function (req,res){

    try {
        let blogId = req.params.blogId;

        if (!blogId)
            return res.status(400).send({ status: false, msg: 'BlogId is missing' })
    
        let blog = await blogsModel.findById({_id:blogId})

        if(!blog){return res.status(404).send({ status: false, msg: "Blogid dont exit" })}

        if (blog.isdeleted==true) {
            return res.status(400).send({ status: false, msg: "Blogs is already deleted" })
        }
        
        await blogsModel.findOneAndUpdate({ _id: blogId }, {
            $set: {
                deletedAt: new Date(),
                isdeleted: true,
            }
        },
            { new: true, upsert: true },
        );

        return res.status(200)
        
    } catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}

const deleteblogs = async function (req,res){

    try {

        let {authorid,category,tags,subcategory} = req.query

        let data = req.query

        if (!data){
        return res.status(400).send({ status: false, msg: 'queries are missing' })}

        const Blogs = await blogsModel.find({$or:[{category : category} , {subcategory : subcategory} ,{tags:tags}, {_id : authorid}] ,isDeleted : true })

        if ( Blogs.length > 0){
            return res.status(404).send({status : false , message : 'allready deleted'})
        }

        await blogsModel.updateMany({$or:[{category : category} , {subcategory : subcategory} ,{tags:tags }, {_id : authorid}] , isDeleted : false} , {$set :{isDeleted : true, deletedAt : new Date()}} ,{new : true}  )
       
        res.status(200).send({status :true , msg : 'Deleted successfully'}) 

        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    


module.exports.createblogs = createblogs
module.exports.getblogs = getblogs
module.exports.updatedblogs = updatedblogs
module.exports.deleted = deleted
module.exports.deleteblogs = deleteblogs

