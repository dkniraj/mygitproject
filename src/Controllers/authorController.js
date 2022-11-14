const authormodel = require("../Models/authormodel")


const createauthor = async function (req,res){

    let data = req.body 

    let newdata = await authormodel.create(data)

    res.send ({msg: newdata})

}

module.exports.createauthor = createauthor


