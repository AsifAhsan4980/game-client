const express = require('express')
const {createNewOrder} = require('../controllers/order')
const {protect} = require("../middleware/auth");

const router = express.Router()

router.route('/').post(protect,createNewOrder)


module.exports = router