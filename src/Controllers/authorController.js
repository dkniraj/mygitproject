const authormodel = require("../Models/authormodel")


const createauthor = async function (req,res){
try {
    let data = req.body 

    let newdata = await authormodel.create(data)

    res.status(201).send ({msg: newdata})

} catch (error) {

    res.status(500).send({msg:error.message})
}
    

}

module.exports.createauthor = createauthor


