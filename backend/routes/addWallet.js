const express = require('express');
const {addWallet ,findAllWallet , findOneWallet, updateWallet, removeWallet} = require('../controllers/addWallet');
const {protect} = require("../middleware/auth");


const router = express.Router();

router.route('/').post(protect,addWallet);
//router.route('/').get( findAllWallet);
router.route('/:_id').get( findOneWallet);
router.route('/:_id').put(protect, updateWallet);
router.route('/delete/:_id').put(protect, removeWallet);
// router.route('/photo/:_id').get(getPhoto);

module.exports = router