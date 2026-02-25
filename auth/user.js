const jwt = require('jsonwebtoken');
const secret = 'utkarsh1234'

function setUser(user) {
   const token =   jwt.sign({
       _id : user.id,
       email : user.email
   }, secret) 
    return token;
}


function getUser(tokens) {
    if (!token) return null;
    jwt.verify(tokens, secret)
}
module.exports = {
    setUser,
    getUser
}

