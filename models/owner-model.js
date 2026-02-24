const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
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
    contact: {
        type: String,
        unique: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
    picture: {
        type: String
    },
    gstin: {
        type: String
    }
});

const Owner = mongoose.model("Owner", ownerSchema);
module.exports = Owner;