const { Schema, model } = require('mongoose');

module.exports.Purchase = model('Purchase', Schema({
    productId:{
        type:Schema.Types.ObjectId,
        ref:'Product',
        required:true,
    },
    accountTye:{
        type: String,
        required: true,
    },
    facebookNumber: {
        type: String,
        required: true,
    },
    facebookPassword: {
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

