const express = require('express');


const {addProductImage,findAll, findOne, update, remove} = require('../controllers/products');



const {protect} = require("../middleware/auth");


const router = express.Router();

router.route('/:id').put(protect,update);
router.route('/addProductImage').post(protect,addProductImage);
router.route('/').get( findAll);
router.route('/:_id').get( findOne);


// router.route('/:_id').put(protect, update);

router.route('/delete/:_id').put(protect, remove);


router.route('/delete/:_id').put(protect, remove);
router.route('/product/list/:id?array=[product]').get(productList);

module.exports = router