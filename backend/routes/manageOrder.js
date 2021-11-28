const express = require('express');
const {getOneOrder} = require('../controllers/handleOrder');
const {protect} = require("../middleware/auth");


const router = express.Router();

router.route('/').get(protect, getOneOrder);


module.exports = router