const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createBook", BookController.createBook  )
router.post("/createauthor", BookController.createauthor )


router.get("/listBooks",BookController.listBooks)
router.get("/updatebook",BookController.updatebook)
router.get("/bookrange",BookController.bookrange)





module.exports = router;