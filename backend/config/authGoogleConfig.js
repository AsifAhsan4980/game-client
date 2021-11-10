const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/Auth');
const _ = require('lodash');

const strategy = new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/google/redirect"
}, async (accessToken, refreshToken, profile, cb) => {
    let user = await User.findOne({ googleId: profile.id, email: profile._json.email });
    if (user) {
        cb(null, user);
    } else {
        user = new User({ googleId: profile.id, email: profile._json.email, username: profile._json.name });
        await user.save();
        cb(null, user);
    }
});

passport.use(strategy);

