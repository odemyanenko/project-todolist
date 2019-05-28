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

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
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

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
    console.log('Example app listening on port ' + app.get('port'));
});