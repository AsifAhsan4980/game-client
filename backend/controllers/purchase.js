const _ = require('lodash');
const { Purchase } = require('../models/Purchase');

module.exports.createNewPurchase = async (req, res) => {
    if (!req.body) {
        res.status(400).send({message: "Content can not be emtpy!"});
        return;
    }
    const purchase = new Purchase(_.pick(req.body, ['userId','productId', 'accountTye', 'Number', 'Password', 'backupCode', 'product', 'paymentType', 'transactionID', 'mobileNumber', 'amount','isComplete']));
    const result = await purchase.save();
    return res.status(201).send({
        purchase: _.pick(result, ['userId','productId', 'accountTye', 'Number', 'Password', 'backupCode', 'product', 'paymentType', 'transactionID', 'mobileNumber', 'amount','isComplete'])
    })
}

module.exports.getAllPurchaseById = async (req, res) => {
    const userId = req.params.id;
    const purchase = await Purchase.find({ userId: userId})
    .populate('productId', 'gameName');
    if (!purchase) res.status(404).send("Not Found any purchase!");
    return res.status(200).send(purchase)
}

module.exports.getAllPurchase = async (req, res) => {
    const purchase = await Purchase.find()
    .populate('productId', 'gameName');
    if (!purchase) res.status(404).send("No purchase available!");
    return res.status(200).send(purchase)
}