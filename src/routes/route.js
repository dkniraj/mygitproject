const express = require("express")
const router = express.Router()
const authorcontroller = require("../Controllers/authorController")
const blogsController = require("../Controllers/blogsController")
const Middleware = require("../Middlewares/validation")
const Middleware2 = require("../Middleware-2/auth")





router.post("/createauthors",Middleware.authorvalidation,authorcontroller.createauthor)

router.post("/loginauthor",authorcontroller.loginauthor)

router.post("/createblogs",Middleware.validation,Middleware2.Authentication,blogsController.createblogs)

router.get("/getblogs",Middleware2.Authentication,blogsController.getblogs)

router.put("/updatedblogs/:blogId",Middleware2.Authentication,Middleware2.Authorization,blogsController.updatedblogs)

router.delete("/deleted/:blogId",Middleware2.Authentication,Middleware2.Authorization,blogsController.deleted)

router.delete("/deleteblogs",blogsController.DeleteBlogByQuery)





module.exports = router