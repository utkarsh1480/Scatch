const jwt = require('jsonwebtoken');
const secret = 'utkarsh1234'

function setUser(user) {
   const token =   jwt.sign({
       _id : user.id,
       email : user.email
   }, secret) 
    return token;
}


function getUser(token) {
    if (!token) return null;
    return jwt.verify(token, secret);
}
module.exports = {
    setUser,
    getUser
}

