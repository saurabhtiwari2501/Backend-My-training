const { response } = require("express")
const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

// const createOrder = async function (req, res) {
//     let data = req.body
//     let freeAppUser = req.headers.isFreeAppUser
//     let findUser = await userModel.findById({_id: data.userId})
//     if (!findUser) return res.send({ status: false, msg: "userId is invalid"})
//     let findproduct = await productModel.findById({_id: data.productId})
//     if (!findproduct) return res.send({status: false, msg: "productId id invalid"})

//     if (freeAppUser == "false"){
//         if ( findUser.balance >= data.amount){
//             let orderCreated = await orderModel.create(data)
//             let update = await userModel.updateOne({_id: findUser}, {$inc: {balance: - data.amount} })
//             let update1 = await userModel.updateOne({_id: findUser}, {$set: {isFreeAppUser:freeAppUser}})
//             return res.send({msg: orderCreated})
//         } else if (findUser.balance <= data.amount) {
//             return res.send({status: true, msg: "User doesn't hsve balance to purchahse"})
//         }
//     } else if (freeAppUser == "true"){
//         let orderCreated = await orderModel.create(data)
//         let update = await orderModel.updateOne({_id: orderCreated._id}, { $set: {amount: 0}} )
//         orderCreated["isFreeAppUser"] = freeAppUser
//         return res.send({data: orderCreated})
//     }
   
// }


const createOrder= async function (req, res) {
    let data= req.body
    let UserId=data.userId
    let productId=data.productId
    let freeuser=data.isFreeAppUser
let validUser= await userModel.findById(UserId).select({_id:1})
let validProduct= await productModel.findById(productId).select({_id:1})
    if(!UserId||!validUser){
      let msgUI= !UserId?" UserID is Required":"Enter a valid User ID";
      return res.send(msgUI)
    }else if(!productId||!validProduct){
      let msgPA= !productId?"Product ID is Required":"Enter a valid Product ID";
      return res.send(msgPA)
    }else if( freeuser!=='true'){
        console.log("this user is not freeAppUser")
        let orderAmount=await productModel.findById(productId).select({price:1,_id:0})
        data.amount=orderAmount.price
        let userBalance=await userModel.findById(UserId).select({balance:1,_id:0})
              userBalance=userBalance.balance
              if(userBalance>data.amount){
                let savedData= await orderModel.create(data)
                let updateUser=await userModel.findByIdAndUpdate({_id:UserId},{$inc:{balance:-data.amount}},{new:true}).select({balance:1,_id:0})
                console.log(updateUser)
                  return res.send({msg: savedData})
              }
        return res.send({msg:"Try to earn more money"})
            }
 
 let savedData= await orderModel.create(data)
  res.send({msg: savedData})
}


module.exports.createOrder = createOrder
