const User = require('../models/user');
const { setUser } = require('../Services/user.js');
const { matchPasswordAndGenerateToke } = require('../models/user.js')

async function handelSignupUser(req, res) {
    const { fullName, email, password, contact } = req.body;
    try {
        const user = await User.create({
            fullName,
            email,
            password,
            contact
        })
        if (!user) return res.send("Please Enter Valid User");
        res.status(200).redirect('/user/login')
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


        const token = await User.matchPasswordAndGenerateToke(email, password)
        console.log(token);
        res.status(200).cookie("token", token).redirect('/home');
    }
    catch (error) {
        res.render('login', {
            error: "Incorrect Email or Password",
        })
    }

}
module.exports = {
    handelSignupUser,
    handelLoginUser
}
