const express = require('express')
const {updateUser, deleteUser, getOneUser, getAllUser, getUserStats,updateUserRole} = require('../controllers/user')
const {protect} = require("../middleware/auth");
const {verifyAllAdmin} = require("../middleware/verifyAllAdmin");
const {verifySuperAdmin} = require("../middleware/verifySuperAdmin");

const router = express.Router()

router.route('/update/:id').put(protect,verifyAllAdmin, updateUser);
router.route('/:id').delete(protect,verifySuperAdmin, deleteUser);
router.route('/find/:id').get( protect,verifyAllAdmin, getOneUser);
router.route('/all_user').get(protect,verifyAllAdmin, getAllUser);
router.route('/stats').get(protect, verifyAllAdmin, getUserStats)
router.route('/roleUpdate/:id').put(protect,verifySuperAdmin, updateUserRole);


module.exports = router