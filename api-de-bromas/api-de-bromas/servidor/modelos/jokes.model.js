const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, 'El setup es requerido'],
            minlength: [10, 'El setup debe tener al menos 10 caracteres']
        },
        punchline: {
            type: String,
            required: [true, 'La punchline es requerida'],
            minlength: [3, 'La punchline debe tener al menos 3 caracteres']
        }
    }, { timestamps: true }
);

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;