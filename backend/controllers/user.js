const User = require('../models/Auth')
const verify = require("../middleware/verifyToken");
const ErrorResponse = require("../utils/errorResponse");
const bcrypt = require("bcryptjs");


exports.updateUser = async (req, res) => {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        if (req.file) {
            try {
                const updatedUser = await User.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                        profilePic: `media/img/${req.file.filename}`
                    },
                    { new: true }
                );
                res.status(200).json(updatedUser);
            } catch (err) {
                res.status(500).json(err);
            }
        }
        else {
            try {
                const updatedUser = await User.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                        //profilePic: `media/img/${req.file.filename}`
                    },
                    { new: true }
                );
                res.status(200).json(updatedUser);
            } catch (err) {
                res.status(500).json(err);
            }
        }
}



exports.deleteUser = async (req, res) => {
    console.log('Delete')
    const _id = req.params.id;
    await User.updateOne({ _id: _id }, { disabled: true });
    return res.status(200).send("Deleted!");
};

//GET

exports.getOneUser = async (req, res) => {
    const id = req.params.id
    if (id) {
        User.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found food with id " + id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error retrieving user with id " + id })
            })
    }
};

/*exports.getOneUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...info } = user._doc;
        res.status(200).json(info);
    } catch (err) {
        res.status(500).json(err);
    }
};*/

//GET ALL
/*exports.getAllUser =  async (req, res) => {
    const query = req.query.new;
 
        try {
            const users = query
                ? await User.find().sort({ _id: -1 }).limit(3)
                : await User.find();
            res.status(201).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
 
};*/


exports.getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(201).send(users);
    } catch (err) {
        res.status(500).json(err);
    }
}


//GET USER STATS
exports.getUserStats = async (req, res) => {
    const today = new Date();
    const latYear = today.setFullYear(today.setFullYear() - 1);

    try {
        const data = await User.aggregate([
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.updateUserRole = async (req, res) => {
    const _id = req.params.id;
    const { role } = req.body;
    await User.updateOne({ _id: _id }, { role: role });
    return res.status(200).send("Role updated!!");
}

exports.updateUserWallet = async (req, res) => {
    const _id = req.params.id;
    const { wallet } = req.body;
    await User.updateOne({ _id: _id }, { wallet: wallet });
    return res.status(200).send("wallet updated!!");
}

exports.updateUserActiveStatus = async (req, res) => {
    const _id = req.params.id;
    const { activeStatus } = req.body;
    await User.updateOne({ _id: _id }, { activeStatus: activeStatus });
    return res.status(200).send("Active Status updated!!");
}

exports.addProduct = async (req, res) => {
    const { productList } = req.body;
    await User.updateOne(
        { _id: req.user.id },
        { $set: { productList: productList } }
    )
    return res.status(200).send("Product added!!");
}
