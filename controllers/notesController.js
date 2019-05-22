const Notes = require('../models/notes');

path = require('path');

//Роут GET /notes, который будет отдавать HTML страницу с формой создания заметки.
exports.note_create_get = function (req, res) {
    res.sendFile(path.join(__dirname, '../views/index.html'));
    //res.send('NOT IMPLEMENTED: Note create GET');
};

//Роут GET /notes/${id}, который будет отдавать HTML страницу детального отображения заметки.
exports.note_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Note detail: ' + req.params.id);
};

// Роут POST /api/notes для создания заметки.
exports.note_create_post = function (req, res) {
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