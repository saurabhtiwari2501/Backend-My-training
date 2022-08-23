const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisher = require("../Controllers/publisherController")


const createBook = async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({ data: bookCreated })
}
//3a

if (!book.author) {
    return res.send({ status: false, msg: "Author id is a mandetory field" })

}

//3b
let author = await authorModel.findById(book.author)
if (!author) {
    return res.send({ status: false, msg: "Autyhor id is not valid" })
}

//3c

if (!book.publisher) {
    return res.send({ status: false, msg: "Publisher id is mandetory field" })
}

// 3d

let publisher = await publisher.findById(book.author)
if (!publisher) {
    return res.send({ status: false, msg: "Publisher id is not valid" })
}

let bookCreated = await bookModel.create(book)
res.send({ data: bookCreated })


const getBooksWithCompletedetails = async function (req, res) {
    let allbooks = await bookModel.find().populate('author Publisher')
    res.send({ data: allbooks })
}

const updateSpecificBooks = async function(req, res){
    let book = await bookModel.find().populate('publisher  ')
}
module.exports.createBook = createBook
module.exports.getBooksWithCompletedetails = getBooksWithCompletedetails