const _ = require('lodash');
const Wallet = require('../models/Wallet');

module.exports.createWallet = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be emtpy!" });
        return;
    }
    const wallet = new Wallet(_.pick(req.body, ['totalAmount', 'spentAmount', 'currentAmount', 'totalOrder']));
    wallet.userId = req.body.userId;
    const result = await wallet.save();
    return res.status(201).send({
        wallet: _.pick(result, ['_id', 'userId', 'totalAmount', 'spentAmount', 'currentAmount', 'totalOrder'])
    })
}


exports.getWalletById = async (req, res) => {
    const id = req.params.id
    if (id) {
        Wallet.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found food with id " + id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error retrieving user with id " + id })
            })
    }

}
