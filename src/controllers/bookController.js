const { count } = require("console")
const bookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")


const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const createauthor= async function (req, res) {
    let data= req.body
    let author_id  = data.author_id
    if(!author_id){
        return res.send({status : false , msg : "another id must be present"})
    }
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

///////////////////////////////////////////////////1//////////////////////////////////////////////////////

const listBooks = async function(req ,res){
    let findauthor  = await authorModel.find({author_name : "Chetan Bhagat"});
    let findbook = await bookModel.find({author_id :{$eq : findauthor[0].author_id
    }});
    res.send({msg : findbook})
}

const updatebook = async function(req ,res){
    let bookprice = await bookModel.findOneAndUpdate({name : "Two states"},{$set : {price :700}},{new :true});
    let updateprice = bookprice.price;
    let authorname = await  authorModel.find({author_id : {$eq : bookprice.author_id }}).select({author_name : 1, _id : 0 })
   
       res.send({authorname ,updateprice })
   }
   ////////////////////////////////3 //////////////////////////////////////////////////

   const bookrange = async function(req, res){
       let range = await bookModel.find({price : {$gte :50,$lte :100}});
       let a = range.map(x =>x.author_id);
       let newrange = await authorModel.find({author_id : a}).select({author_name: 1, _id : 0});
       res.send({newrange});
   }
   
   
   
   module.exports.createBook = createBook
   module.exports.createauthor = createauthor
   module.exports.bookrange = bookrange
   module.exports.updatebook = updatebook
   module.exports.listBooks = listBooks
   