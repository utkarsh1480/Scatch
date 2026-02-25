
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        requuire: true,
        minLength: 3,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cart: {
        type: Array,
        default: []
    },
    contact: {
        type: String,
    },
    orders: {
        type: Array,
        default: []
    },
    picture: "string"
})

const User = mongoose.model("User", userSchema);
module.exports = User;