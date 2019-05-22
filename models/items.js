const Notes = require('../models/notes');
const mongoose = require('mongoose');

const ItemsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    //  notes_id: {type: Schema.ObjectId, ref: 'Notes'},
    iscompleted: {
        type: Boolean,
        required: true,
        default: false
    },
    completed_at: {type: Date}
}, {collection: 'items'});

module.exports = mongoose.model('Items', ItemsSchema);