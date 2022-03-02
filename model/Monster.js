const mongoose = require('mongoose');
const Schema = mongoose.Schema; // eslint-disable-line

const monsterSchema = new Schema({
    monster: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    contact:{
        type: Number,
        required: true,
    }
});
module.exports = mongoose.model('Monster', monsterSchema);