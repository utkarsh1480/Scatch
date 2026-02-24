const ownerModel = require('../models/owner-model.js');

async function handelCreateOwner(req, res) {
    const owner = await ownerModel.find({});
    if (owner.length > 0) {
        return res.status(500).send("you Dont't have acess to create USer");  
    }
    const { fullName, email, password, gstin } = req.body;
    const user = await ownerModel.create({
        fullName,
        email,
        password,
        gstin
    })
    res.send(user);
    res.status(200).send("Owner Created SuccessFully");
    
}
module.exports = {
    handelCreateOwner
}