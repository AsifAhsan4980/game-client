const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
        userId: {
            type: String,
            required: true
        },
        methodName : {
            type: String,
            required: true
        },
        availableBalance :  {
            type: Number,
        },
        totalOrder : {
            type: Number,
        },
        totalSpend : {
            type: Number
        },
        disabled: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true
    })


const Wallet= mongoose.model("Wallet", ProductsSchema)

module.exports = Wallet