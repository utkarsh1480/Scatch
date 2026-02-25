const User = require('../models/user');
const { setUser } = require('../auth/user.js');

async function handelSignupUser(req, res) {
    const { fullName, email, password } = req.body;
    try {
        const user = await User.create({
            fullName,
            email,
            password
        })
        if (!user) return res.send("Please Enter Valid User");
        res.status(200).json({ status: "Sucess" })
    }

    catch (error) {
        console.log(error);
    }
} 

async function handelLoginUser(req, res) {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    try {
        const LoginUser = await User.findOne({ email, password });
        console.log(LoginUser);
        if (!LoginUser) return res.send("Plese Enter Valid Information");
        const token = setUser(LoginUser);
        res.status(200).cookie(token).send("Success");
    }
    catch (error) {
        res.send(error);
    }
   
}   
module.exports = {
    handelSignupUser,
    handelLoginUser
 }
