const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var dogSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: true
    },
    weight: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var Dogs = mongoose.model('dog', dogSchema);

module.exports = Dogs;