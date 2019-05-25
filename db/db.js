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
/*
// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to MongoDB.");
}).catch(err => {
    console.log('Could not connect to MongoDB.');
    process.exit();
});
* */
module.exports = {
    connect
}
