const express = require('express');
const {create,findAll, findOne, update, remove} = require('../controllers/products');
const {protect} = require("../middleware/auth");


const router = express.Router();

router.route('/').post(protect, create);
router.route('/').get( findAll);
router.route('/:_id').get( findOne);
router.route('/:_id').put(protect, update);
router.route('/:_id').delete(protect, remove);

module.exports = router