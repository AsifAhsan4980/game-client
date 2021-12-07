const _ = require('lodash');
const {Order} = require('../models/Order');

module.exports.createNewOrder = async (req, res) => {
    console.log('New Order')
    if (!req.body) {
        res.status(400).send({message: "Content can not be emtpy!"});
        return;
    }
    const order = new Order(_.pick(req.body, ['userId','walletId', 'purchaseId','productId']));
    const result = await order.save();
    return res.status(201).send({
        order: _.pick(result, ['userId','walletId', 'purchaseId','productId'])
    })
}