const express = require("express")
const router = express.Router()
const authorcontroller = require("../Controllers/authorController")
const blogsController = require("../Controllers/blogsController")
const Middleware = require("../Middlewares/validation")





router.post("/authors",Middleware.authorvalidation,authorcontroller.createauthor)

router.post("/createblogs",Middleware.validation,blogsController.createblogs)

router.get("/getblogs",blogsController.getblogs)

router.put("/updatedblogs/:blogId",blogsController.updatedblogs)

router.delete("/deleted/:blogId",blogsController.deleted)

router.delete("/deleteblogs",blogsController.deleteblogs)





module.exports = router