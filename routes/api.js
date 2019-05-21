const express = require('express');
const router = express.Router();

const notes_controller = require('../controllers/notesController');
const lists_controller = require('../controllers/listsController');

//notes
router.post('/notes', notes_controller.note_create_post);
router.put('/notes/:id', notes_controller.note_update_post);
router.delete('/notes/:id', notes_controller.note_delete_post);

//lists
router.get('/lists/:id', lists_controller.list_display);
router.post('/lists', lists_controller.list_create_post);
router.put('/lists/:id', lists_controller.list_update_post);
router.delete('/lists/:id', lists_controller.list_delete_post);

//Создать роут и функционал в клиентской части для изменения прикрепленной картинки (замены на другую).
//Созлать роут и функционал в клиентской части для удаления картинки.

module.exports = router;