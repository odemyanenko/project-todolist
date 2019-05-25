const Notes = require('./notes');
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const ItemsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    notes_id: [{ type: ObjectId, ref: 'Notes' }],
    iscompleted: {
        type: Boolean,
        required: true,
        default: false
    },
    completed_at: {type: Date},
    url: {type: String}
}, {collection: 'items'});

module.exports = mongoose.model('Items', ItemsSchema);