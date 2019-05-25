const express = require("express");
const app = express();
const db = require('./db/db');
const path = require('path');

const indexRouter = require('./routes/index');
const notesRouter = require('./routes/notes');
const listsRouter = require('./routes/lists');
const apiRouter = require('./routes/api');
const pnfRouter = require('./routes/404');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', './views/templates');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use("/", indexRouter);
app.use("/notes", notesRouter);
app.use("/lists", listsRouter);
app.use("/api", apiRouter);
app.use("/*", pnfRouter);

db.connect();

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});