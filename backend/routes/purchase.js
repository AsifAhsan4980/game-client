const express = require('express')
const {createNewPurchase} = require('../controllers/purchase')
const {protect} = require("../middleware/auth");

const router = express.Router()

router.route('/').post(createNewPurchase)

module.exports = router