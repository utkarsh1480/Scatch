
const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        requuire: true,
        minLength: 3,
        trim : true
    },
    email: {
        type: String,
        required: true,
        unique : true
    },
    password: {
        type: String,
        required: true
    },
    
    contact: {
        type: Number,
        unique: true
    },
    
    products: {
        type: Array,
        default : []
    },
    picture: "string",
    gstin: {
        type : String
    }
})

const User = mongoose.model("User", ownerSchema);
module.exports = userSchema;