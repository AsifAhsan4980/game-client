const { Schema, model } = require('mongoose');

module.exports.Wallet = model('Wallet', Schema({
    totalAmount:{
        type: Number,
    },
    spentAmount:{
        type: Number,
    },
    currentAmount:{
        type: Number,
    },
    totalOrder:{
        type: Number,
    },
}, { timestamps: true }));

