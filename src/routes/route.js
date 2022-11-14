const express = require("express")
const router = express.Router()
const authorcontroller = require("../Controllers/authorController")




router.post("/authors",authorcontroller.createauthor)








module.exports = router