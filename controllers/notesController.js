const Notes = require('../models/notes');

path = require('path');


//Роут GET /notes, который будет отдавать HTML страницу с формой создания заметки.
exports.note_create_get = function (req, res) {
    res.sendFile(path.join(__dirname, '../views/addNotes.html'));
//    res.render('addNotes');
};

//Роут GET /notes/${id}, который будет отдавать HTML страницу детального отображения заметки.
exports.note_detail = function (req, res) {
    Notes.findById(req.params.id, function (err, item) {
        if (err) return next(err);
        res.send(item);
        // res.sendFile(path.join(__dirname, '../views/index.html'));
    });
};

// Роут POST /api/notes для создания заметки.
exports.note_create_post = function (req, res) {
    const notes = new Notes({
        title: "Notes 4",//req.body.title,
        type: 'List',
        description: "Description 4",//req.body.description,
        color: 0
    });
    notes.save()
        .then(item => {
            console.log(item);
            res.redirect("/");
        })
        .catch(err => {
            console.error(err)
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
exports.note_delete_post = function (req, res) {
    // Notes.deleteOne({ _id: req.params.id });
    // console.log(result);

    Notes.findByIdAndRemove(req.params.id, (err, item) => {
        if (err) return res.status(500).send(err);
        return res.status(200).redirect("/");
    });
};