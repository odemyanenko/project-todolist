const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const ImagesSchema = new mongoose.Schema({
    notes_id: [{ type: ObjectId, ref: 'Notes' }],
    data: Buffer
}, {collection: 'images'});

module.exports = mongoose.model('Images', ImagesSchema);