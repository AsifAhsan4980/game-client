const ErrorResponse = require("../utils/errorResponse")
const User = require("../models/Auth");
const {Order} = require("../models/Order");
const Products = require("../models/Products");
const orderQueue = require('./')
const adminQueue = require('./')
const Wallet = require("../models/Wallet");
const {Purchase} = require("../models/Purchase");

exports.getOneOrder = async (req, res, next) => {
    const value = orderQueue.shift();
    const assignedAdmin = adminQueue.shift()
    const orderId = value.orderId
    const userId = value.userId
    const walletId = value.walletId
    const purchaseId = value.purchaseId

    let userData
    let walletData
    let purchaseData
    let orderData

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

    if (orderId) {
        Order.findById(orderId)
            .then(data => {
                if (!data) {
                    res.status(404).send({message: "Not found food with id " + orderId})
                } else {
                    orderData = data
                }
            })
            .catch(err => {
                res.status(500).send({message: "Error retrieving user with id " + orderId})
            })
    }
    const productId = purchaseData.productId

    const adminProductId= req.param.id

    if (adminProductId ){
        for(let i = 0; i<adminProductId.length; i++){
            if( adminProductId[i] === productId){
                res.status(200).send()
            }
        }
    }
}
