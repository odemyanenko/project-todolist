const express = require('express');
const router = express.Router();

const notes_controller = require('../controllers/notesController');

router.get("/", notes_controller.note_create_get);
router.get('/:id', notes_controller.note_detail);

module.exports = router;