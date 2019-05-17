const express = require("express");
const app = express();

const router = express.Router();
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

app.use("/", router);
app.use("*", function (req, res) {
    res.sendFile(path + "404.html");
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});