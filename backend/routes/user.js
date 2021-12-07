const express = require('express')
const {updateUser, deleteUser, getOneUser, getAllUser, getUserStats,updateUserRole,updateUserWallet,updateUserActiveStatus,addProduct} = require('../controllers/user')
const {protect} = require("../middleware/auth");
const {verifyAllAdmin} = require("../middleware/verifyAllAdmin");
const {verifySuperAdmin} = require("../middleware/verifySuperAdmin");

const router = express.Router()

router.route('/update/:id').put(protect,verifyAllAdmin, updateUser);
router.route('/:id').delete(protect,verifySuperAdmin, deleteUser);
router.route('/find/:id').get( getOneUser);
router.route('/all_user').get(protect,verifyAllAdmin, getAllUser);
router.route('/stats').get(protect, verifyAllAdmin, getUserStats)
router.route('/roleUpdate/:id').put(protect,verifySuperAdmin, updateUserRole);
router.route('/walletUpdate/:id').put(protect,updateUserWallet);
router.route('/activeStatusUpdate/:id').put(protect,updateUserActiveStatus);
router.route('/add/product').put(protect,addProduct);

module.exports = router