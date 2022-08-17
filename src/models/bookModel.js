const mongoose = require('mongoose');
const { count } = require("console")
const bookModel = require("../models/bookModel")
const BookModel = require("../models/bookModel")


// const bookSchema = new mongoose.Schema( {
//     bookName: String, 
//     authorName: String, 
//     tags: [String],

//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     sales: {type: Number, default: 10}
// }, { timestamps: true });


// module.exports = mongoose.model('Book', bookSchema) //users




// const createBook= async function (req, res) {
//     let data= req.body
//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const booksData= async function (req, res) {
//     let allBooks =await bookModel.find().select({bookName:1, authorName : 1, _id: 0})
//     res.send({msg :allBooks}) }

//     const getBooksInYear = async function(req , res){
//         let year = req.body.year
//         let allBooks1 = await bookModel.find({year: year})
//         res.send({msg :allBooks1})
//     }

//     const getparticularBOoks = async function(req , res){
//         let particularBooks = await bookModel.find(req.body)
//         res.send({msg : particularBooks})
//     }

//     const getXINRBooks = async function( req , res){
//         let indianBooks = await bookModel.find({$in : ["100" , "200" , "500"]})

//       res.send({msg : indianBooks})
//     }

//     const getRandomBooks = async function(req , res){
//         let randomBooks = await bookModel.find({$or : [{stockAvailable : true }, { totalpages :{$gt : 500 }}]})
//         res.send({msg : randomBooks})
//     }


// const bookSchema = new mongoose.Schema( {
//     bookName: {
//         type:String,
//         require:true
//     }, 
//     authorName: String, 
//     tags: [String,String],

//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     // sales: {type: Number, default: 10}
// year:{
//     type:Number,
//     default:"2021",
//     require: true
// },
// totalpages:Number,
// stockAvailable:Boolean
// }, 

//  { timestamps: true });





// Task 1- Create a collection of 11+ books.
const createBook = async function (req, res) {
    const book = req.body
    let savedBook = await BookModel.create(book)
    res.send({ msg: savedBook })
}
// Task 2- return all the bookName and authorName only.
const allBooksList = async function (req, res) {
    let list = await bookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ msg: list })
}
// Task 3- Return all those bookName which published in a inputed year
const yearDetails = async function (req, res) {
    let yearList = await bookModel.find({ year: req.body.year }).select({ bookName: 1, _id: 0 })
    res.send(yearList)
}
// Task 4- send the reponse after satisfying the any random condition
const particularBooks = async function (req, res) {

    let specificBooks = await bookModel.find(req.body)
    res.send({ msg: specificBooks })
}
// Task 5- send bookName of those book only which have indianprice of 100 inr or 200 inr or 500 inr.
const priceDetails = async function (req, res) {
    let list = await bookModel.find({ "prices.indianPrice": { $in: ["100INR", "200INR", "500 INR"] } }).select({ bookName: 1, _id: 0 })
    res.send({ msg: list })
}
//Send the details of those books which are in stock or having more than 500 pags.
const randomBooks = async function (req, res) {
    let allBooks = await bookModel.find({ $or: [{ stockAvailable: true }, { totalPages: { $gt: 500 } }] })
    res.send({ msg: allBooks })
}

Let data= req.body
Await bookModel.create(data)
bookModel.find().select ( { bookName: 1, authorName: 1} )


module.exports.createBook = createBook;
module.exports.bookList = bookList;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getParticularBooks = getParticularBooks;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getRandomBooks = getRandomBooks;

// module.exports = mongoose.model('Book', bookSchema) //users