const {uri, dbName} = require('./config');

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, { useNewUrlParser: true });

// exports.connect =
// (err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log('connected');
//   client.close();
// });



const state = {
    db: null
};

// exports.connect = function (url, done) {
//     if (state.db){
//         return done();
//     }
//     MongoClient.connect(url, function (err, db) {
//         if (err){
//             return done(err);
//         }
//         state.db = db;
//         done();
//     })
// }


function testConnection() {
    return new Promise(function (resolve, reject) {
        client.connect().then(function () {
            client.close();
            console.log('ok');
            resolve(true)
        }).catch(function (err) {
            client.close();
            console.log(err);
            resolve(false)
        })
    });
}

module.exports = {
    testConnection
}
