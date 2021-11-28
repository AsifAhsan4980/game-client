const { Schema, model } = require('mongoose');

module.exports.WalletCreate = model('WalletCreate', Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'Auth',
        required:true,
    },
    walletId:{
        type:Schema.Types.ObjectId,
        ref:'Wallet',
        required:true,
    },
    purchaseId:{
        type:Schema.Types.ObjectId,
        ref:'Purchase',
        required:true,
    },
}, { timestamps: true }));

