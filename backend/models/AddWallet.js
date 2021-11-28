const mongoose = require('mongoose');
const { Schema} = require('mongoose');

const AddWalletSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Auth',
        required: true,
    },
    walletId: {
        type: Schema.Types.ObjectId,
        ref: 'Wallet',
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
    disabled: {
        type: Boolean,
        default: false
    },
},
    {
        timestamps: true
    })


const AddWallet = mongoose.model("AddWallet", AddWalletSchema)

module.exports = AddWallet