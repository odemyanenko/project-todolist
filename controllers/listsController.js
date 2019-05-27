const Notes = require('../models/notes');

//Роут GET /lists, который будет отдавать HTML страницу с формой создания списка.
exports.list_create_get = function (req, res) {
    res.render('note', {});

};

exports.list_create_get = (req, res, next)=>{
    Notes.find()
        .then(listNote=>{
            res.render('addlist', {
                notes_list: listNote,
                pageTitle: 'ListNote',
                path: '/',
                hasNotes: listNote.length > 0,
                activeListNode: true,
                listNoteCSS: true
            });
        })
        .catch(err=>{
            console.log(err);
        });
};


//Роут GET /lists/${id}, который будет отдавать HTML страницу детального отображения списка.
exports.list_display = function (req, res) {
    res.send('NOT IMPLEMENTED: List detail GET: ' + req.params.id);
};

//Роут GET /api/lists/${id} отображения заметки со списком.
exports.list_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: List display GET: ' + req.params.id);
};

//Роут POST /api/lists для добавления нового списка задач с учетом того, что количество позиций в списке - не ограничено и заранее не известно.
exports.list_create_post = function (req, res) {
    note.push({title:req.body.title});
    res.send('NOT IMPLEMENTED: List create POST');
};

//Роут PUT /api/lists/${id} для редактирования списка задач.
exports.list_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: List update PUT: ' + req.params.id);
};

//Роут DELETE /api/lists/${id} для удаления заметки со списком.
exports.list_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: List delete DELETE:' + req.params.id);
};
