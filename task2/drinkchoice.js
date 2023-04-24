const mongoose = require('mongoose');

const DrinkChoiceSchema = new mongoose.Schema({
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: Number,
        required: true
    },
    income: {
        type: Number,
        required: true
    },
    mood: {
        type: Number,
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    decision: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});

const DrinkChoiceModel = mongoose.model('DrinkChoice', DrinkChoiceSchema);

module.exports = DrinkChoiceModel;
