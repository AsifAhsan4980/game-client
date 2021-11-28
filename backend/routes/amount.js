const express = require('express')
const {createAmount} = require('../controllers/amount')
const {protect} = require("../middleware/auth");

const router = express.Router()

router.route('/').post(protect,createAmount)


module.exports = router