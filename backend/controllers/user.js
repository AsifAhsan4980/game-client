const User = require('../models/Auth')
const verify = require("../middleware/verifyToken");
const ErrorResponse = require("../utils/errorResponse");
const bcrypt = require("bcryptjs");

exports.updateUser = async (req, res) => {
    console.log("done")
    if (req.user.id === req.params.id) {

        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can update only your account!");
    }
}

//DELETE
/*exports.deleteUser = async (req, res) => {
    if (req.user.id === req.params.id) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted...");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can delete only your account!");
    }
};*/

exports.deleteUser = async (req, res) => {
    const _id = req.params.id;
    await User.updateOne({ _id: _id }, { disabled: true });
    return res.status(200).send("Deleted!");
};

//GET

exports.getOneUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...info } = user._doc;
        res.status(200).json(info);
    } catch (err) {
        res.status(500).json(err);
    }
};
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
