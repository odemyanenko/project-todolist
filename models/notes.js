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
    items: [{
        text: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            required: true,
            default: false
        },
        completed_at: {type: Date}
    }],
    color: {
        type: Number,
        required: true,
        default: 0
    },
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
    updated_at: {type: Date}
}, {collection: 'notes'});

NotesSchema.methods = {
    url: function() {
        return  '/notes/' + this._id
    }
}

module.exports = mongoose.model('Notes', NotesSchema);