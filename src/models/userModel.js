const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    balance: {
        type: String,
        default: 100
    },
    address: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    isFreeAppUser: {
        type: Boolean,
        default: false,
    }
    
}, { timestamps: true });



module.exports = mongoose.model('User', userSchema) //users
