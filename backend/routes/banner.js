const express = require('express');
const {createBanner,findAllBanner, findOneBanner, updateBanner, removeBanner} = require('../controllers/banner');
const {protect} = require("../middleware/auth");


const router = express.Router();

router.route('/').post(protect, createBanner);
router.route('/').get(protect, findAllBanner);
router.route('/:_id').get(protect, findOneBanner);
router.route('/:_id').put(protect, updateBanner);
router.route('/:_id').delete(protect, removeBanner);

module.exports = router