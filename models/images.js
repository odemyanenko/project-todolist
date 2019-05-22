const mongoose = require('mongoose');

const ImagesSchema = new mongoose.Schema({
    // notes_id: {type : Schema.ObjectId, ref : 'Notes'},
    data: Buffer
}, {collection: 'images'});

module.exports = mongoose.model('Images', ImagesSchema);