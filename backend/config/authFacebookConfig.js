const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/Auth');

const strategy = new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/facebook/redirect",
    profileFields: ['id', 'displayName', 'email']

}, async (accessToken, refreshToken, profile, cb) => {
    let user = await User.findOne({ facebookId: profile.id, email: profile._json.email });
    if (user) {
        cb(null, user);
    } else {
        user = new User({ facebookId: profile.id, email: profile._json.email, username: profile._json.name });
        await user.save();
        cb(null, user);
    }
});

passport.use(strategy);

