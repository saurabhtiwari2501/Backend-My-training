const express = require('express');
const router = express.Router();
const bookModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")



router.post("/createBook", UserController.createBook  )

router.get("/getBookData", UserController.getBookData)

module.exports = router; 