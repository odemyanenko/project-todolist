const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['List', 'Note']
    },
    description: String,
    color: {
        type: Number,
        required: true,
        default: 0
    },
    iscompleted: {
        type: Boolean,
        required: true,
        default: false
    },
    completed_at: {type: Date},
    status: {
        type: String,
        required: true,
        enum: ['L', 'D', 'A'],
        default: 'L'
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    updated_at: {type: Date},
    url: {type: String}
}, {collection: 'notes'});

module.exports = mongoose.model('Notes', NotesSchema);