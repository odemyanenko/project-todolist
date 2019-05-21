const express = require('express');
const router = express.Router();

path = require('path');

router.use("*", function (req, res) {
    res.sendFile(path.join(__dirname, '../views/404.html'));
});

module.exports = router;