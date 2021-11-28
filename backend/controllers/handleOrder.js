const ErrorResponse = require("../utils/errorResponse")
const User = require("../models/Auth");
const Order = require("../models/Order");
const Products = require("../models/Products");
const queue = require('./')
const Wallet = require("../models/Wallet");
const {Purchase} = require("../models/Purchase");

exports.getOneOrder = async (req, res, next) => {
    const value = queue.shift();
    const userId = value.userId
    const walletId = value.walletId
    const purchaseId = value.purchaseId

    let userData
    let walletData
    let purchaseData

    //get user data
    if (userId) {
        User.findById(userId)
            .then(data => {
                if (!data) {
                    res.status(404).send({message: "Not found food with id " + userId})
                } else {
                    userData = data
                }
            })
            .catch(err => {
                res.status(500).send({message: "Error retrieving user with id " + userId})
            })
    }

    //get wallet data
    if (walletId) {
        Wallet.findById(walletId)
            .then(data => {
                if (!data) {
                    res.status(404).send({message: "Not found food with id " + walletId})
                } else {
                    walletData = data
                }
            })
            .catch(err => {
                res.status(500).send({message: "Error retrieving user with id " + walletId})
            })
    }

    //get wallet data
    if (purchaseId) {
        Purchase.findById(purchaseId)
            .then(data => {
                if (!data) {
                    res.status(404).send({message: "Not found food with id " + purchaseId})
                } else {
                    purchaseData = data
                }
            })
            .catch(err => {
                res.status(500).send({message: "Error retrieving user with id " + purchaseId})
            })
    }
    const productId = purchaseData.productId

    const adminProductId= req.param.id

    if (adminProductId ){
        for(let i = 0; i<adminProductId.length; i++){
            if( adminProductId[i] === productId){
                
            }
        }
    }
}
