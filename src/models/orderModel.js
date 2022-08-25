const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema( {
    amount: Number,
    today: Date,
    isFreeAppUser: {
        type: Boolean,
        default: true,
    }

}, { timestamps: true });

module.exports = mongoose.model('order', orderSchema)

