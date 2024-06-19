const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./servidor/configuracion/mongoose.config');
require('./servidor/rutas/jokes.routes')(app);

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));