const Notes = require('../models/notes');

path = require('path');


//Роут GET /notes, который будет отдавать HTML страницу с формой создания заметки.
exports.note_create_get = (req, res, next) => {
    console.log('get addnote');
    res.render('addnote', {
        pageTitle: 'Add Note',
        path: 'api/notes',
        addNoteCSS: true,
        listNoteCSS: true
    });
};


//Роут GET /notes/${id}, который будет отдавать HTML страницу детального отображения заметки.
exports.note_detail = (req, res, next)=>{
    //const notId = req.params.noteId;
    Notes.findById(req.params.id)
        .then(note=>{
            res.render('note_detail', {
                note: note,
                pageTitle: note.title,
                path:'/notes'
            });
        })
        .catch(err=>console.log(err));
}

// Роут POST /api/notes для создания заметки.
// exports.note_create_post = function (req, res) {
//     const notes = new Notes({
//         title: req.body.title,
//         type: 'Note',
//         description: req.body.description,
//         color: 0
//     });
//     notes.save()
//         .then(item => {
//             console.log('created note');
//             res.redirect("/");
//         })
//         .catch(err => {
//             console.error(err)
//         });
// };


exports.note_create_post = (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    console.log(req.body);
    const note = new Notes({
        title: title,
        type: "Note",
        description: description,
        color: 0
    });
    console.log(note);
    note.save()
        .then(result => {
            console.log('created note');
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
        });
};

//Роут PUT /api/notes/${id} для редактирования заметки.
exports.note_update_post = function (req, res) {
    Notes.findById(req.params.id, function (err, item) {
        if (err) throw err;

        item.title = 'change2';
        //item.title = req.body.title;

        item.save()
            .then(item => {
                //req.flash('success', 'Article Updated');
                console.log(item);
                res.redirect("/");
            })
            .catch(err => {
                console.error(err)
            });
    });
};

//    Роут DELETE /api/notes/${id} для удаления заметки.
exports.note_delete_post = (req, res, next) => {
    Notes.findOneAndDelete(req.params.id)
        .then(() => {
            console.log('Delete note');
            res.redirect("/");
        })
        .catch(err => console.log(err));
};