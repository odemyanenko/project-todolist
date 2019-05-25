const Notes = require('../models/notes');

path = require('path');

//Роут GET /, который будет возвращать главную HTML страницу со всеми заметками.
exports.notes_all_get = function (req, res) {
    Notes.find(function (err, notes) {
        if (err) return next(err);
        //res.send(notes);
        res.render('index', { "name": "Vasia Pupkin", "surname": "Sidorovich" });
        //res.sendFile(path.join(__dirname, '../views/index.html'));
    });
    // Notes.find({},{},function(err, notes){
    // if (err) return next(err);
    //     res.render('index', {
    //         "notes" : notes
    //     });
    // });
};