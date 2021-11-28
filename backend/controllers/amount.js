const _ = require('lodash');
const {Amount} = require('../models/Amount');

module.exports.createAmount = async (req, res) => {
    if (!req.body) {
        res.status(400).send({message: "Content can not be emtpy!"});
        return;
    }
    const amount = new Amount(_.pick(req.body, ['totalAmount','spentAmount', 'currentAmount','totalOrder']));
    const result = await amount.save();
    return res.status(201).send({
        amount: _.pick(result, ['totalAmount','spentAmount', 'currentAmount','totalOrder'])
    })
}