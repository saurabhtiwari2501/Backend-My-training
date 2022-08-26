const newUser = require("../models/userModel")


const createUser = async function(req, res){

let data = req.body;
let headerdata= req.headers["isFreeAppUser"]
data.isFreeAppUser=headerdata
let usercreated= await newUser.create(data)
res.send({data: usercreated})
}

module.exports.createUser=createUser