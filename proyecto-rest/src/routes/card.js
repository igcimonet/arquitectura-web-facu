const {Router} = require('express');
const router = Router();
const array_ = require('underscore');// libreria para recorrer arreglos
const cards = require('./sampleCardData.json');
console.log(cards);


// obtener una tarjeta especifica
router.get('/', function(req, res) {
    const {customer_id} = req.params;//del objeto request.params obtengo el id - sería la URL
    const card_id_aux = req.query;//del objeto request.query obtengo el id - sería la URL (query string)

    // consultar porque no puedo obtener el customer_id de los parametros de la URL

    console.log('card_id_aux:  ' + card_id_aux.card_number);
    console.log(req.params);
    if(card_id_aux.card_number) {
        //recorro el array
        array_.each(cards, function(card, i) {
            if(card.card_number == card_id_aux.card_number) {
                res.status(200).json(card);
            }
        });
    } else{
        res.status(404).json( {error:'error al procesar solicitud - consultar tarjeta'} );
    }
});



// obtener una lista de tarjetas
router.get('/', function(req, res) {
    const {customer_id} = req.params;//del objeto request.params obtengo el id - sería la URL
    const card_id_aux = req.query;//del objeto request.query obtengo el id - sería la URL (query string)


    console.log('card_id_aux:  ' + card_id_aux.card_number);
    console.log(req.params);
    if(card_id_aux.card_number) {
        res.status(200).json(cards);
    
    } else{
        res.status(404).json( {error:'error al procesar solicitud - consultar tarjeta'} );
    }
});




// crear una tarjeta
router.post('/api/customers/:customer_id/cards', function(req, res) {
    const {customer_id} = req.params;//del objeto request.params obtengo el id - sería la URL
    
    console.log('customer_id:  ' + customer_id);
    const {card_number, balance} = req.body;//guardo los datos del body

    if(card_number) {
        const newCard = {customer_id, ...req.body};
        console.log(newCard);
        //cards.push(newCard);// guardo el nuevo cliente en el array
        res.status(200).json(newCard);
    } else{
        res.status(404).json( {error:'error al procesar solicitud - crear tarjeta'} );
    }

});




module.exports = router;