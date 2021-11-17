const Banners = require('../models/Banner')
const ErrorResponse = require("../utils/errorResponse")
const Products = require("../models/Products");


//create new product Item
exports.createBanner = (req, res) => {

    // validate request
    if (!req.body) {
        res.status(400).send({message: "Content can not be emtpy!"});
        return;
    }
    console.log()
    const {firstTitle, image, secondTitle} = req.body;

    // new product
    const productDetails = new Banners({
        image,
        firstTitle,
        secondTitle
    })

    // save product in the database
    productDetails.save()
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

// retrieve and return all product Item
exports.findOneBanner = (req, res) => {
    const bannerId = req.params._id
    if (bannerId) {
        Products.findById(bannerId)
            .then(data => {
                if (!data) {
                    res.status(404).send({message: "Not found food with id " + bannerId})
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({message: "Error retrieving user with id " + bannerId})
            })
    }
}
// retrieve and return a single product item
exports.findAllBanner = (req, res) => {

    Banners.find()
        .then(menu => {
            res.send(menu)
        }).catch(err => {
        res.status(500).send({message: err.message || "Error Occurred while retrieving user information"})
    })
}

// Update a food item by product id
exports.updateBanner = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({message: "Data to update can not be empty"})
    }

    const id = req.params._id;
    Banners.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({message: `Cannot Update user with ${id}. Maybe user not found!`})
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({message: "Error Update user information"})
        })
}

// Delete a food with specified product id in the request
exports.removeBanner = (req, res) => {
    const productId = req.params._id

    //Banners.findByIdAndDelete(productId)
    Banners.updateOne({ _id: productId }, { disabled: true })
        .then(data => {
            if (!data) {
                res.status(404).send({message: `Cannot Delete with id ${productId}. Maybe id is wrong`})
            } else {
                res.send({
                    message: "Banner was deleted successfully!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + productId
            });
        });
}