const express = require('express');
const router = express.Router();
const newuserController = require("../Controllers/newuserController")
const productController = require("../Controllers/productController")
const middleware = require("../middlewares/commonMiddlewares")
const orderController = require("../Controllers/orderController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", middleware.mid1,  newuserController.createUser)
router.post("/createProduct", productController.createProduct)
router.post("/createOrder",orderController.createOrder )

module.exports = router;