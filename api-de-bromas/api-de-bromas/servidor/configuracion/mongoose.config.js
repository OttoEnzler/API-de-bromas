const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chistes_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado a la base de datos chistes_db'))
.catch(err => console.error('No se pudo conectar a la base de datos chistes_db', err));
