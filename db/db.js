const {uri, dbName} = require('./config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

function connect() {
    return new Promise(function (resolve, reject) {
        mongoose.connect(uri + '/' + dbName, {useNewUrlParser: true})
            .then(() => console.log('connection succesful'))
            .catch((err) => console.error(err))
    })
}

module.exports = {
    connect
}
