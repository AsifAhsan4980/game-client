const express = require('express');
const {createWallet,getWalletById} = require('../controllers/wallet');
const {protect} = require("../middleware/auth");


const router = express.Router();

router.route('/').post(createWallet);
router.route('/:id').get(protect,getWalletById);

module.exports = router