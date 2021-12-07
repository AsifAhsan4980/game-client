const express = require('express')
const {createNewOrder} = require('../controllers/order')
const {orderQueue} = require('../controllers/orderQueue')
const {protect} = require("../middleware/auth");

const router = express.Router()

router.route('/').post(protect,createNewOrder)
router.route('/').get(orderQueue)


module.exports = router