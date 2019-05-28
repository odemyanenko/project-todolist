const Notes = require('../models/notes');

path = require('path');

//Роут GET /, который будет возвращать главную HTML страницу со всеми заметками.
exports.notes_all_get = async (req, res, next) => {
    const notes = await Notes.find({'type': 'Note'});

    Notes.find({'type': 'List'})
        .then(lists => {
            res.render('index', {
                notes_all: notes,
                lists_all: lists,
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