const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
    name: String, 
    category: String,
    prices: Number,
    
}, { timestamps: true });


module.exports = mongoose.model('Product', productSchema) //users
