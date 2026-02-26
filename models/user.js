
const mongoose = require("mongoose");
const { randomBytes, createHmac } = require('crypto');
const  { setUser} = require('../Services/user.js')
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
        unique: true,
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
            "Please use a valid email address"
        ]
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

userSchema.static("matchPasswordAndGenerateToke", async function (email, password)  {
    const user = await User.findOne({ email});
    if (!user) throw new Error("User Not Found");
    const salt = user.salt;
    const hashedPassward = user.password;
    const hashPassword = createHmac("sha256", salt).update(password).digest('hex');
    
    if (hashedPassward !== hashPassword) throw Error("Invalid Password")
    const token = setUser(user);
    return token;
})
const User = mongoose.model("User", userSchema);



module.exports = User;