const mongoose = require('mongoose');
function connect(Url) {

    return mongoose.connect(Url);
}

module.exports = { connect };