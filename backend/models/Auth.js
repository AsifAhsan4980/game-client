const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Schema } = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide a username']
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email",
        ]
    },
    phonenumber: {
        type: String,
        //required: [true, "Please provide a valid number"],
    },
    password: {
        type: String,
        //required : [true, "Please provide an password"],
        minlength: 8,
        select: false
    },
    googleId: {
        type: String,
    },
    facebookId: {
        type: String,
    },
    activeStatus: {
        type: String,
        default: 'Online'
    },
    isActive: {
        type: Boolean,
        default: false
    },
    socketId: {
        type: String,
        default: null
    },
    profilePic: {
        type: String,
        default: null
    },
    wallet:{
        type: Schema.Types.ObjectId,
        ref: "Wallet",
        default: null
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    walletId: {
        type: String
    },
    disabled: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
},
    {
        timestamps: true
    }
)

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.methods.matchPasswords = async function (password) {
    return await bcrypt.compare(password, this.password)
}

UserSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id, username: this.username, email: this.email, phonenumber: this.phonenumber, role: this.role }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};
UserSchema.methods.resetJwtToken = function () {
    return jwt.sign({ id: this._id, username: this.username, email: this.email, phonenumber: this.phonenumber, role: this.role }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE2,
    });
};
UserSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Hash token (private key) and save to database
    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

    // Set token expire date
    this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // Ten Minutes

    return resetToken;
};

const Auth = mongoose.model("Auth", UserSchema)

module.exports = Auth