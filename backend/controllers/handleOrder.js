const ErrorResponse = require("../utils/errorResponse")
const User = require("../models/Auth");
const Order = require("../models/Order");
const Products = require("../models/Products");

exports.handleOrder = async (req, res, next) => {
    try{
        const {
            userId,
            purchaseId
        } = req.body

            if (userId) {
                User.findById(userId)
                    .then(async data => {
                        if (!data) {
                            res.status(404).send({message: "Not found food with id " + id})
                        } else {
                            try {
                               const walletIds = data.walletId

                                const order = await Order.create({
                                    userId,
                                    walletIds,
                                    purchaseId
                                });
                                await order.save()
                            } catch (err) {
                                next(err);
                            }
                        }
                    })
                    .catch(err => {
                        return new ErrorResponse("Error retrieving user with id " + userId, err)

                    })
            }
    }
    catch(err) {
        return new ErrorResponse("something went wrong")
    }
}

exports.updateOrder = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update can not be empty" })
    }

    const id = req.params._id;
    Products.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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