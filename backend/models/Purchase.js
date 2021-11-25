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
    accountType:{
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

        option: {
            type: String,
        },
        price: {
            type: Number,
        }
    },
    
    isComplete: {
        type: Boolean,
        default: false
    },
}, { timestamps: true }));

