const Products = require('../models/Products')
const ErrorResponse = require("../utils/errorResponse")
const upload = require('../middleware/multer');
const _ = require('lodash');

//create new product Item

exports.update = async(req, res) => {
    // console.log(req.file)
    // const file = req.file.filename

    // new product
    try {
        upload(req, async function (err) {
            const updatedProduct = await Products.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body
                },
                {new: true}
            );
            res.status(200).json(updatedProduct);
        })

    } catch (err) {
        res.status(500).json(err);
    }

}

exports.addProductImage = (req, res) => {
    upload(req, res, function (err) {
        const { gameName, categoryName } = req.body;


        const product = new Products({
            gameName,
            categoryName,
            images: `media/img/${req.file.filename}`,
        })
        product.save()
            .then(data => {
                //res.send(data)
                res.status(200).send(data)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating a create operation"
                });
            });
    })
}


exports.getImage = async (req, res) => {
    const productId = req.params._id;
    const product = await Products.findById(productId)
        .select({ images: 1, _id: 0 })
    res.set('Content-Type', product.images.contentType);
    return res.status(200).send(product.images.data);
}

// retrieve and return all product Item
exports.findOne = (req, res) => {
    const productId = req.params._id
    if (productId) {
        Products.findById(productId)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found food with id " + productId })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error retrieving user with id " + productId })
            })
    }
}
// retrieve and return a single product item
exports.findAll = (req, res) => {

    Products.find()
        .then(menu => {
            res.send(menu)
        }).catch(err => {
        res.status(500).send({ message: err.message || "Error Occurred while retrieving user information" })
    })
}

// Update a food item by product id
// exports.update = (req, res) => {
//     if (!req.body) {
//         return res
//             .status(400)
//             .send({ message: "Data to update can not be empty" })
//     }
//
//     const id = req.params._id;
//     Products.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//         .then(data => {
//             if (!data) {
//                 res.status(404).send({ message: `Cannot Update user with ${id}. Maybe user not found!` })
//             } else {
//                 res.send(data)
//             }
//         })
//         .catch(err => {
//             res.status(500).send({ message: "Error Update user information" })
//         })
// }

// Delete a food with specified product id in the request
exports.remove = (req, res) => {
    const productId = req.params._id

    //Products.findByIdAndDelete(productId)
    Products.updateOne({ _id: productId }, { disabled: true })
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