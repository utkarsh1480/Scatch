const {getUser} = require('../Services/user')
async function userMiddleware(req, res, next) {
    const token = req.cookies?.token;
    console.log("token", token);
    if (!token) return res.redirect('/user/login');
    const user = await getUser(token);
   
    if (!user) res.redirect('/user/signup');
    req.user = user;
    next();
}

module.exports = userMiddleware;