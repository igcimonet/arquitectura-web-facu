const express = require('express');
const bodyParser = require('body-parser');
const moment     = require('moment');
const app = express();



//inicio de servidor
app.listen(process.env.PORT || 3000, function() {
    console.log('El servidor esta en el puerto 3000');
});

/** para correr el server con NODEMON usar el comando:   npm run dev   */
// underscore libreria para recorrer arreglos


// parse body as json

app.use(bodyParser.json());

// all requests
app.use((req, res, next) => {

    console.log(`${req.method}: ${req.path} - ${moment().format(moment.HTML5_FMT.DATETIME_LOCAL_MS)}`);

    next();

});

// ROUTES - posee los archivos que manejan las entidades
//app.use(require('./routes'));
app.use('/api/customers', require('./routes/customers'));
app.use('/api/customers/:customer_id/cards', require('./routes/card'));