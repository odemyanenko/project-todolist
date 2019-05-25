const express = require('express');
const router = express.Router();

const main_controller = require('../controllers/mainController');

router.get("/", main_controller.notes_all_get);

// router.get('/', function(req, res) {
//     res.redirect('/notes');
// });

module.exports = router;