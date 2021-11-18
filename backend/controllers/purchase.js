const _ = require('lodash');
const {Purchase} = require('../models/Purchase');

module.exports.createNewPurchase = async (req, res) => {
    if (!req.body) {
        res.status(400).send({message: "Content can not be emtpy!"});
        return;
    }
    const purchase = new Purchase(_.pick(req.body, ['productId', 'accountTye', 'facebookNumber', 'facebookPassword', 'backupCode', 'product', 'paymentType', 'transactionID', 'mobileNumber', 'amount']));
    const result = await purchase.save();
    return res.status(201).send({
        purchase: _.pick(result, ['productId', 'accountTye', 'facebookNumber', 'facebookPassword', 'backupCode', 'product', 'paymentType', 'transactionID', 'mobileNumber', 'amount'])
    })
}