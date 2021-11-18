const { Schema, model } = require('mongoose');

module.exports.Purchase = model('Purchase', Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'Auth',
        required:true,
    },
    productId:{
        type:Schema.Types.ObjectId,
        ref:'Products',
        required:true,
    },
    accountTye:{
        type: String,
        required: true,
    },
    Number: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    backupCode: {
        type: String,
        required: true,
    },
    product: {
        type: String,
        required: true,
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

