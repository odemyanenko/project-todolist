const {uri, dbName, usersCollection} = require('./config');

const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient(uri, {useNewUrlParser: true});

function testConnection() {
    return new Promise(function (resolve, reject) {
        client.connect().then(function () {
            client.close();
            resolve(true)
        }).catch(function (err) {
            client.close();
            resolve(false)
        })
    });
}

module.exports = {
    testConnection
}
