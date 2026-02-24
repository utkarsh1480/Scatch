const mongoose = require('mongoose');
const config = require('config')
const dbgr = require('debug')("Developement:mongoose");

mongoose
    .connect(`${config.get("MONGODB_URI")}/scatch`)
  
        .then(() => {
            dbgr("MongoDb is connected");
        })
        .catch((err) => {
            dbgr(err);
        })
module.exports = mongoose.connection;