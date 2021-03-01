const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    username: String,
    firstName: String,
    lastName: String,
    email: String,
    passwordReset: { type: String, select: false }, // select: prevents this from showing up unless asked for!
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);