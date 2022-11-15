const express = require("express")
const router = express.Router()
const authorcontroller = require("../Controllers/authorController")
const blogsController = require("../Controllers/blogsController")
const Middleware = require("../Middlewares/validation")





router.post("/authors",authorcontroller.createauthor)

router.post("/createblogs",Middleware.validation,blogsController.createblogs)

router.get("/getblogs",blogsController.getblogs)
router.put("/updatedblogs",blogsController.updatedblogs)



module.exports = router