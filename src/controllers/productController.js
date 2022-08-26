const { count } = require("console")
const productModel = require("../models/productModel")

const createProduct= async function (req, res) {
    let data= req.body

    let productCreated= await productModel.create(data)
    res.send({msg: productCreated})
}

module.exports.createProduct = createProduct
