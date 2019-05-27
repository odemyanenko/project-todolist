const Notes = require('../models/notes');

path = require('path');

//Роут GET /, который будет возвращать главную HTML страницу со всеми заметками.
exports.notes_all_get = (req, res, next) => {
    Notes.find()
        .then(notes => {
            // console.log(notes);
            res.render('index', {
                notes_list: notes,
                pageTitle: 'ListNote',
                path: '/',
                hasNotes: notes.length > 0,
                activeListNode: true,
                listNoteCSS: true
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.get404 = (req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page not found', path: '/404'});
}