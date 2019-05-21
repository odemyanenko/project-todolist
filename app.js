const express = require("express");
const app = express();
const router = express.Router();
const db = require('./db/db');

const notes_controller = require('./controllers/notesController');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static('public'));


const path = __dirname + '/views/';

router.use(function (req, res, next) {
    console.log("/" + req.method);
    next();
});

app.get("/", function (req, res) {
    res.sendFile(path + "index.html");
});

//
app.get("/notes", notes_controller.note_create_get);
app.get('/notes/:id', notes_controller.note_detail);
app.post('/api/notes', notes_controller.note_create_post);
app.put('/api/notes/:id', notes_controller.note_update_post);
app.delete('/api/notes/:id', notes_controller.note_delete_post);
//

app.use("/", router);

// const notesRouter = require('./routes/notes');
// app.use("/notes", notesRouter);

app.use("*", function (req, res) {
    res.sendFile(path + "404.html");
});

// db.connect('"mongodb+srv://testUser:7791OlegHome!!@testcluster-8zmxo.mongodb.net/test?retryWrites=true"', function (err) {
//     if (err) {
//         return console.log(err);
//     }
//     app.listen(3000, function () {
//         console.log('Example app listening on port 3000!')
//     });
// })

//db.testConnection();
// db.connect();
//
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});