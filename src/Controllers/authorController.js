const authormodel = require("../Models/authormodel")


/*const createauthor = async function (req,res){
try {
    let data = req.body 

    let newdata = await authormodel.create(data)

    res.status(201).send ({msg: newdata})

} catch (error) {

    res.status(500).send({msg:error.message})
}
    

}*/
const createauthor = async function (req,res){
    try {
        let data = req.body;
        if(Object.keys(data).length==0){
           // return res.status(400).send({status: "false",msg: "all fields are mandatory"});
        } 
        let{fname,lname,title,email,password} = data;
        if(!fname){
            return res.status(400).send({status:"false",msg: "fname is required"});
        }
        if(!lname){
            return res.status(400).send({status:"false" ,msg: "lname is required"});
        }
       if(!title){
        return res.status(400).send({status: "false",msg:"Title is missing"});
       }
       if(!email){
        return res.status(400).send({status:"false",msg: "email is required"})
       }
       if(!password){
        return res.status(400).send({status:"false" ,msg:"password is required"})
       }
    
        let newdata = await authormodel.create(data);
    
        res.status(201).send ({msg: newdata})
    
    } 
    catch (error) {
    
        res.status(500).send({msg:error.message})
    }
        
    
    }
    
    module.exports.createauthor = createauthor

module.exports.createauthor = createauthor


