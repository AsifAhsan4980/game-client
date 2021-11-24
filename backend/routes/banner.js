const express = require('express');
const {createBanner,findAllBanner, findOneBanner, updateBanner, removeBanner,getImage} = require('../controllers/banner');
const {protect} = require("../middleware/auth");


const router = express.Router();

router.route('/').post(protect,createBanner);
router.route('/').get(protect, findAllBanner);
router.route('/:_id').get(protect, findOneBanner);
router.route('/:_id').put(protect, updateBanner);
router.route('/delete/:_id').put(protect, removeBanner);
router.route('/image/:_id').get(getImage);

module.exports = router