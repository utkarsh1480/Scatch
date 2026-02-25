const mongoose = require('mongoose');
const config = require('config')
const dbgr = require('debug')("development:mongoose");

mongoose
    .connect(`${config.get("MONGODB_URI")}/scatch`)

    .then(() => {
       console.log("MongoDb Connected")
    })
    .catch((err) => {
       console.log(error)
    })
module.exports = mongoose.connection;