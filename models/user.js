
const mongoose = require("mongoose");
const { randomBytes, createHmac } = require('crypto')
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
    salt: {
        type : String
    },
    orders: {
        type: Array,
        default: []
    },
    picture: "string"
})

userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified()) return;
    const salt = randomBytes(16).toString();
    const hashPassward = createHmac("sha256", salt).update(user.password).digest('hex');
    this.salt = salt;
    user.password = hashPassward;

})

userSchema.static("matchPasswordAndGenerateToke", function (email, password)  {
    const user = User.findOne({ email, password });
    if (!user) return 
    const hashedPassward = this.password;
    const hashPassword = createHmac("sha256", salt).update(user.password).digest('hex');

    if (hashedPassward == hashPassword) {
        return token;
    }
})
const User = mongoose.model("User", userSchema);



module.exports = User;