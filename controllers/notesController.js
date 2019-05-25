const Notes = require('../models/notes');

path = require('path');


//Роут GET /notes, который будет отдавать HTML страницу с формой создания заметки.
exports.note_create_get = function (req, res) {
    res.render('index', {});
};

//Роут GET /notes/${id}, который будет отдавать HTML страницу детального отображения заметки.
exports.note_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Note detail: ' + req.params.id);
};

// Роут POST /api/notes для создания заметки.
exports.note_create_post = function (req, res) {
    const notes = new Notes({
        title: 'Note 1',
        type: 'Note',
        description: 'Description 1',
        color: 0
    });
    notes.save()
        .then(doc => {
            console.log(doc)
        })
        .catch(err => {
            console.error(err)
        });
    res.send('NOT IMPLEMENTED: Note create POST');
};

//Роут PUT /api/notes/${id} для редактирования заметки.
exports.note_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Note update PUT: ' + req.params.id);
};

//    Роут DELETE /api/notes/${id} для удаления заметки.
exports.note_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Note delete DELETE ' + req.params.id);
};