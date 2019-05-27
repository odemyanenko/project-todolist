const express = require('express');
const router = express.Router();

const page404_controller = require('../controllers/mainController');

path = require('path');

router.use("*", function (req, res) {
    res.render('404', {});
});

router.get('/', page404_controller.get404);

module.exports = router;