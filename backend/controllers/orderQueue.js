const { Order } = require("../models/Order");
const User = require('../models/Auth')

var orderList = []
var activeAdminList = []

exports.orderQueue = async (req, res, next) => {
    console.log('Find Order')
    let order = await Order.find()
    orderList.push(order)

    console.log('Find Admin')
    const admin = await User.find({ "isActive": "true" })
    activeAdminList.push(admin)

    const handleOrder = []

    for (i = 0; i < orderList[0].length; i++) {
        for (j = 0; j < activeAdminList[0].length; j++) {
            for (k = 0; k < activeAdminList[0][j].productList.length; k++) {
                if (order[i].handOver === false) {
                    if (orderList[0][i].productId.equals(activeAdminList[0][j].productList[k])) {
                        handleOrder.push({
                            'admin': activeAdminList[0][j].username,
                            'orderId': orderList[0][i]._id,
                            'productId': orderList[0][i].productId
                        })
                        await Order.updateOne({ _id: orderList[0][i]._id }, { handOver: true,handleOverAdmin:activeAdminList[0][j]._id })
                        order = await Order.find()
                        orderList.push(order)
                        const admin = activeAdminList[0][j];
                        activeAdminList[0].splice(j, 1)
                        activeAdminList[0].push(admin)
                    }
                }
            }
        }
    }

    console.log('handleOrder', handleOrder)

}


