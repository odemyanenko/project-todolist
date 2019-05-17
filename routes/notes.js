const express = require('express');
const router = express.Router();

const notes_controller = require('../controllers/notesController');

router.get("/notes", notes_controller.note_create_get);
router.get('/notes/:id', notes_controller.note_detail);
router.post('/api/notes', notes_controller.note_create_post);
router.put('/api/notes/:id', notes_controller.note_update_post);
router.delete('/api/notes/:id', notes_controller.note_delete_post);

module.exports = router;