const express = require("express");
const app = express();
const router = express.Router();
const db = require('./db/db');

const indexRouter = require('./routes/index');
const notesRouter = require('./routes/notes');
const listsRouter = require('./routes/lists');
const apiRouter = require('./routes/api');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static('public'));


// const path = __dirname + '/views/';
//
// router.use(function (req, res, next) {
//     console.log("/" + req.method);
//     console.log("path:" + path);
//     next();
// });
//
// app.get("/", function (req, res) {
//     console.log("path:" + path);
//     res.sendFile(path + "index.html");
// });

// app.use("/", router);

app.use("/", indexRouter);
app.use("/notes", notesRouter);
app.use("/lists", listsRouter);
app.use("/api", apiRouter);

app.use("*", function (req, res) {
    res.sendFile(__dirname + "/views/404.html");
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});