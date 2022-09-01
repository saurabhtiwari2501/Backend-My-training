const express = require('express');
const router = express.Router();
const BookController = require("../controllers/bookController")
// const commonMW = require ("../middlewares/commonMiddlewares")
const UserController = require('../controllers/userController')


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createBook", BookController.createBook)
router.get("/getBooksData", BookController.getBooksData)
router.delete("/updateBooks", BookController.updateBooks)
router.post("/deleteBooks", BookController.deleteBooks)
router.post("/totalSalesPerAuthor", BookController.totalSalesPerAuthor)


router.post("/basicCode", UserController.basicCode)
router.post("/createUser", UserController.createUser)
router.get("/getUsersData", UserController.getUsersData)



module.exports = router;