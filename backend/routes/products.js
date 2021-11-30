const express = require('express');
const {create,addProductImage,findAll, findOne, update, remove} = require('../controllers/products');
const {productList} = require('../controllers/productList');
const {protect} = require("../middleware/auth");


const router = express.Router();

router.route('/add/:id').put(protect,create);
router.route('/addProductImage').post(protect,addProductImage);
router.route('/').get( findAll);
router.route('/:_id').get( findOne);
router.route('/:_id').put(protect, update);
router.route('/delete/:_id').put(protect, remove);
router.route('/product/list').get(productList);

module.exports = router