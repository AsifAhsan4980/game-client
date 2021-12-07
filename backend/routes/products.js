const express = require('express');
const {addProductImage,findAll, findOne, update, remove} = require('../controllers/products');
const {protect} = require("../middleware/auth");
const upload = require("../middleware/multer");

const router = express.Router();

router.route('/add/:id').put(update);
router.route('/addProductImage').post(protect,upload.single("image"),addProductImage);
router.route('/').get( findAll);
router.route('/:_id').get( findOne);
router.route('/delete/:_id').put(protect, remove);

module.exports = router