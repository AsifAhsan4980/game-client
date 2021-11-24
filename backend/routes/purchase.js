const express = require('express')
const {createNewPurchase} = require('../controllers/purchase')
const {protect} = require("../middleware/auth");
const {handleOrder} = require("../controllers/handleOrder");

const router = express.Router()

router.route('/').post(createNewPurchase, handleOrder)

module.exports = router