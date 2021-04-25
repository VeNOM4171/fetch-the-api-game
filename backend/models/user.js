const mongoose = require("mongoose");

const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        reqired: true,
        min: 3,
        max: 255
    },
    email: {
        type: String,
        reqired: true,
        min: 3,
        max: 255
    },
    password: {
        type: String,
        reqired: true,
        min: 3,
        max: 1024
    },
    entries: {
        type: Number,
        default: 0,
    },
    date: {
        type: Date,
        default: Date.now
    }

}));

module.exports = User;