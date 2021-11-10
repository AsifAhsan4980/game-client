const User = require('../models/Auth')
const UserInfo = require('../models/USerInfo')
const ErrorResponse = require("../utils/errorResponse")


// @desc    Register user
exports.register = async (req, res, next) => {
    const {username, email,phonenumber, password} = req.body;


    try {
        const user = await User.create({
            username,
            email,
            phonenumber,
            password,
        });

        sendToken(user, 200, res);
    } catch (err) {
        next(err);
    }
};

// @desc    Login user
exports.login = async (req, res, next) => {
    const {email, password} = req.body;

    // Check if email and password is provided
    if (!email || !password) {
        return next(new ErrorResponse("Please provide an email and password", 400));
    }

    try {
        // Check that user exists by email
        const user = await User.findOne({email}).select("+password");

        if (!user) {
            return next(new ErrorResponse("Invalid credentials", 401));
        }

        // Check that password match
        const isMatch = await user.matchPasswords(password);

        if (!isMatch) {
            return next(new ErrorResponse("Invalid credentials", 401));
        }


        sendToken(user, 200, res);
        saveInfo(user, 200, res);
    } catch (err) {
        next(err);
    }
};


exports.forgotpassword = async (req, res, next) => {
    const {email} = req.body

    if (!email) {
        return next(new ErrorResponse("Please provide an email", 400));

        try {
            const user = await User.findOne({email});

            if (!user) {
                return next(new ErrorResponse("No email could not be sent", 404));
            }
            const resetToken = user.getResetPasswordToken();


        } catch (err) {
            next(err);
        }
    }
};
exports.resetpassword = (req, res, next) => {
    res.send('Reset Password Route')
}


const sendToken = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
    const {password, ...info} = user._doc;


    res.cookie('jwt', token, {
        expires: new Date(Date.now() + process.env.JWT_TOKEN),
        // secure:true,
        httpOnly: true,
    }).status(statusCode).json({success: true, ...info, token});
};

exports.sendTokenOauth = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
    const {password, ...info} = user._doc;


    res.cookie('jwt', token, {
        expires: new Date(Date.now() + process.env.JWT_TOKEN),
        // secure:true,
        httpOnly: true,
    }).status(statusCode).json({success: true, ...info, token});
};

const saveInfo = async (user, statusCode, res) => {
    const user_id = user._id
    try {
        const userInfo = await UserInfo.create({
            user_id
        });
        console.log(userInfo)
    } catch (err) {
        res.send(err);
    }

}