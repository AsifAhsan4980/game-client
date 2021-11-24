const express = require('express')
const {createNewPurchase,getAllPurchaseById,getAllPurchase} = require('../controllers/purchase')
const {protect} = require("../middleware/auth");
const {handleOrder} = require("../controllers/handleOrder");

const router = express.Router()


router.route('/create').post(protect,createNewPurchase)
router.route('/:id').get(protect,getAllPurchaseById)
router.route('/').get(protect,getAllPurchase)



module.exports = router