const { Schema, model } = require('mongoose');
const {Schema} = require("mongoose");

module.exports.WalletCreate = model('WalletCreate', Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'Auth',
        required:true,
    },
    paymentType: {
        type: String,
        required: true,
    },
    transactionID: {
        type: String,
        required: true,
        unique: true,
    },
    mobileNumber: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
}, { timestamps: true }));

