const Joke = require('../modelos/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: 'Algo salio mal', error: err }));
};

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => res.json({ joke: oneJoke }))
        .catch(err => res.json({ message: 'Algo salio mal', error: err }));
}

module.exports.findRandomJoke = (req, res) => {
    Joke.countDocuments().exec((err, count) => {
        if (err) return res.json({ message: 'Algo salió mal', error: err });
        //genera el numero random
        const random = Math.floor(Math.random() * count);
        //skipea el chiste que se encuentra en la posicion [random]
        Joke.findOne().skip(random).exec((err, result) => {
            if (err) return res.json({ message: 'Algo salio mal', error: err });
            res.json({ joke: result });
        });
    })
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ joke: newJoke }))
        .catch(err => res.json({ message: 'Algo salio mal', error: err }));
};

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: 'Algo salio mal', error: err }));
};

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Algo salio mal', error: err }));
};