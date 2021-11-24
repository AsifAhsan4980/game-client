const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
        userId: {
            type: String,
            required: true
        },
        walletId: {
            type: String,
            required: true
        },
        isActive: {
            type: Boolean,
            default: true
        },
        purchaseId: {
            type: String,
        }
    },
    {
        timestamps: true
    })


const Order = mongoose.model("Orders", ProductsSchema)

module.exports = Order