const AddWallet = require('../models/AddWallet')
const ErrorResponse = require("../utils/errorResponse")
const _ = require('lodash');
// const formidable = require('formidable');
const fs = require('fs');

//create new product Item
exports.addWallet = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be emtpy!" });
        return;
    }

    const { walletId,paymentType, transactionID, mobileNumber, amount } = req.body;

    // new product
    const walletDetails = new AddWallet({
        walletId,
        paymentType,
        transactionID,
        mobileNumber,
        amount
    })
    walletDetails.userId=req.user._id;

    // save product in the database
    walletDetails.save()
        .then(data => {
            //res.send(data)
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        });
}

// exports.getWallet = async (req, res) => {
//     const productId = req.params._id;
//     const product = await Products.findById(productId)
//         .select({ images: 1, _id: 0 })
//     res.set('Content-Type', product.images.contentType);
//     return res.status(200).send(product.images.data);
// }

// retrieve and return all product Item
exports.findOneWallet = (req, res) => {
    const walletId = req.params._id
    if (walletId) {
        AddWallet.findById(walletId)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found food with id " + walletId })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error retrieving user with id " + walletId })
            })
    }
}
// retrieve and return a single product item
exports.findAllWallet = (req, res) => {

    AddWallet.find()
        .then(menu => {
            res.send(menu)
        }).catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retrieving user information" })
        })
}

// Update a food item by product id
exports.updateWallet = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update can not be empty" })
    }

    const id = req.params._id;
    AddWallet.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Update user with ${id}. Maybe user not found!` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error Update user information" })
        })
}

// Delete a food with specified product id in the request
exports.removeWallet = (req, res) => {
    const productId = req.params._id

    //Products.findByIdAndDelete(productId)
    AddWallet.updateOne({ _id: productId }, { disabled: true })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Delete with id ${productId}. Maybe id is wrong` })
            } else {
                res.send({
                    message: "Product was deleted successfully!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + productId
            });
        });
}