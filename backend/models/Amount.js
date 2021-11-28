const { Schema, model } = require('mongoose');

module.exports.Amount = model('Amount', Schema({
    totalAmount:{
        type:Number,
    },
    spentAmount:{
        type:Number,
    },
    currentAmount:{
        type:Number,
    },
    totalOrder:{
        type:Number,
    },
}, { timestamps: true }));

