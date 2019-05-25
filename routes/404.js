const express = require('express');
const router = express.Router();

path = require('path');

router.use("*", function (req, res) {
    res.render('404', {});
});

module.exports = router;