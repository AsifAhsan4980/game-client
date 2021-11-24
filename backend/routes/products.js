const express = require('express');
const {create,findAll, findOne, update, remove,getPhoto} = require('../controllers/products');
const {protect} = require("../middleware/auth");



const router = express.Router();

router.route('/').post( protect,create);
router.route('/').get( findAll);
router.route('/:_id').get( findOne);
router.route('/:_id').put(protect, update);
router.route('/delete/:_id').put(protect, remove);
router.route('/photo/:_id').get(getPhoto);

module.exports = router