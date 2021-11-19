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







/////////////////////////////////////////////////////////////////////////////////////////////////






const array_ = require('underscore');// libreria para recorrer arreglos
const cards = require('./sampleCardData.json');
const transactions = require('./sampleTransactionData.json');


/** TRAJETAS */
console.log(cards);

// obtener una tarjeta especifica
app.get('/api/customers/:customer_id/cards', function(req, res) {
    const customer = req.params;//del objeto request.params obtengo el id - sería la URL
    const card_id_aux = req.query;//del objeto request.query obtengo el id - sería la URL (query string)

    // consultar porque no puedo obtener el customer_id de los parametros de la URL

    console.log('card_id_aux:  ' + card_id_aux.card_number);
    console.log(req.params);
    if(card_id_aux.card_number) {//evaluo el valor query string
        //recorro el array
        array_.each(cards, function(card, i) {
            if(card.card_number == card_id_aux.card_number) {
                res.status(200).json(card);
            }
        });
    } else{// si no tiene query string le paso la lista
        console.log('else customer.customer_id: ' + customer.customer_id);
        let newArray = [];
        array_.each(cards, function(card, i) {
            
            if(cards[i].customer_id == customer.customer_id) {
                newArray.push(cards[i]);
                console.log('newArray: ' + newArray);
            }
        });
        res.status(200).json(newArray);
        //res.status(404).json( {error:'error al procesar solicitud - consultar tarjeta'} );
    }
});


// crear una tarjeta
app.post('/api/customers/:customer_id/cards', function(req, res) {
    const {customer_id} = req.params;//del objeto request.params obtengo el id - sería la URL
    
    console.log('customer_id:  ' + customer_id);
    const {card_number, balance} = req.body;//guardo los datos del body

    if(card_number) {
        const newCard = {customer_id, ...req.body};
        console.log(newCard);
        cards.push(newCard);// guardo el nuevo cliente en el array
        res.status(200).json(newCard);
    } else{
        res.status(404).json( {error:'error al procesar solicitud - crear tarjeta'} );
    }

});


//// obtener una lista de tarjetas
//app.get('/api/customers/:customer_id/cards', function(req, res) {
//    const customer = req.params;//del objeto request.params obtengo el id - sería la URL
//    
//
//    console.log('customer.customer_id: ' + customer.customer_id);
//    let newArray = [];
//        array_.each(cards, function(card, i) {
//            
//            if(cards[i].customer_id == customer.customer_id) {
//                newArray.push(cards[i]);
//                console.log('newArray: ' + newArray);
//            }
//        });
//        res.status(200).json(newArray);
//
//});


// borrar una tarjeta
app.delete('/api/customers/:customer_id/cards/:card_number', function(req, res) {
    const customer = req.params;//del objeto request.params obtengo el id - sería la URL

    console.log('customer: ' + customer);
    console.log('customer.customer_id: ' + customer.customer_id);
    console.log('customer.card_number: ' + customer.card_number);

    if(customer.card_number) {
        //recorro el array
        array_.each(cards, function(card, i) {
            if(card.card_number == customer.card_number) {
                cards.splice(i, 1);
                res.status(200).json({mensaje: "tarjeta eliminada"});
            }
        });
    } else{
        res.status(404).json( {error:'error al procesar solicitud - borrar el cliente'} );
    }
});



////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


// OPERACIONES SOBRE TRANSACCIONES


// obtener una transaccion especifica
app.get('/api/customers/:customer_id/cards/:card_number/transactions', function(req, res) {
    const aux_param_id = req.params;//del objeto request.params obtengo el id - sería la URL
    const transaction_id_aux = req.query;//del objeto request.query obtengo el id - sería la URL (query string)

    // consultar porque no puedo obtener el customer_id de los parametros de la URL

    console.log('transaction_id_aux:  ' + transaction_id_aux.transaction_id);
    console.log(req.params);
    if(transaction_id_aux.transaction_id) {//evaluo el valor query string
        //recorro el array
        array_.each(transactions, function(transaction, i) {
            if(transaction.transaction_id == transaction_id_aux.transaction_id) {
                res.status(200).json(transaction);
            }
        });
    } else{// sino tiene query string le paso la lista
        console.log('else - aux_param_id.customer_id: ' + aux_param_id.customer_id);
        console.log('else - aux_param_id.card_number: ' + aux_param_id.card_number);
        let newArray = [];
        array_.each(transactions, function(transaction, i) {
            
            if(transactions[i].customer_id == aux_param_id.customer_id &&
                transactions[i].card_number == aux_param_id.card_number) {
                newArray.push(transactions[i]);
                console.log('newArray: ' + newArray);
            }
        });
        res.status(200).json(newArray);
        //res.status(404).json( {error:'error al procesar solicitud - consultar transaccion'} );
    }
});





// crear una transaccion
app.post('/api/customers/:customer_id/cards/:card_number/transactions', function(req, res) {
    const customer = req.params;//del objeto request.params obtengo el id - sería la URL
    
    console.log('customer.customer_id:  ' + customer.customer_id);
    console.log('customer.card_number:  ' + customer.card_number);
    aux_customer_id = customer.customer_id;
    aux_card_number = customer.card_number;
    console.log('aux_customer_id:  ' + aux_customer_id);
    console.log('aux_card_number:  ' + aux_card_number);
    const {amount, transaction_type} = req.body;//guardo los datos del body

    const arrayLength = transactions.length +1;

    if(transaction_type) {
        const newTransaction = {aux_customer_id, aux_card_number, arrayLength, ...req.body};
        console.log(newTransaction);
        transactions.push(newTransaction);// guardo el nuevo cliente en el array
        res.status(200).json(newTransaction);
    } else{
        res.status(404).json( {error:'error al procesar solicitud - crear transaccion'} );
    }

});






//// obtener una lista de transacciones
//app.get('/api/customers/:customer_id/cards/:card_number/transactions', function(req, res) {
//    const aux_param_id = req.params;//del objeto request.params obtengo el id - sería la URL
//    
//
//    console.log('aux_param_id.customer_id: ' + aux_param_id.customer_id);
//    console.log('aux_param_id.card_number: ' + aux_param_id.card_number);
//    let newArray = [];
//        array_.each(transactions, function(transaction, i) {
//            
//            if(transactions[i].customer_id == aux_param_id.customer_id &&
//                transactions[i].card_number == aux_param_id.card_number) {
//                newArray.push(transactions[i]);
//                console.log('newArray: ' + newArray);
//            }
//        });
//        res.status(200).json(newArray);
//
//});




// ROUTES - posee los archivos que manejan las entidades
//app.use(require('./routes'));
app.use('/api/customers', require('./routes/customers'));
//app.use('/api/customers/:customer_id/cards', require('./routes/card.js'));
