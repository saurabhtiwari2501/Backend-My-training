const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema( {
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,
//     // isIndian: Boolean,
//     // parentsInfo: {
//     //     motherName: String,
//     //     fatherName: String,
//     //     siblingName: String
//     // },
//     // cars: [ String  ]
// }, { timestamps: true });


const bookSchema = new mongoose.Schema( {
    BookName: String,
    AuthorName: {
        type: String,
        unique: true,
    },
    catogary: {
        type: String,
        enum: [" ", "Tragedy", "Sci-Fi", "Fantasy", "Action and Adventure", "Crime and Mystery", "Romance", "Humor and Satire"]
    },
    Year: Number,
    
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //users



// String, Number
// Boolean, Object/json, array