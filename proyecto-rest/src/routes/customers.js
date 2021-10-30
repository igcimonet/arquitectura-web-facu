const {Router} = require('express');
const router = Router();
const array_ = require('underscore');// libreria para recorrer arreglos
const customers = require('./sampleCustomerData.json');
console.log(customers);



// obtener un cliente especifico
router.get('/', function(req, res) {
    const customer_id_aux = req.query;//del objeto request.params obtengo el id - sería la URL
    if(customer_id_aux.customer_id) {
        //recorro el array de clientes
        array_.each(customers, function(customer, i) {//el segundo parametro de la segunda función es un indice

            if(customer.customer_id == customer_id_aux.customer_id) {

                res.status(200).json(customer);
            }
        });
    } else{
        res.status(404).json( {error:'error al procesar solicitud - consultar cliente'} );
    }
});



// crear un cliente
router.post('/', function(req, res) {
    const id_aux = customers.length + 1;//busco la longitud del array y le sumo 1
    const customer_id = id_aux;
    const {name, lastname, document} = req.body;//guardo los datos del body
    if(id_aux && name && lastname && document) {
        const newCustomer = {customer_id, ...req.body}//paso el id + todo el objeto request body dentro de un nuevo objeto
        console.log(newCustomer);
        customers.push(newCustomer);// guardo el nuevo cliente en el array
        res.status(201).json( {mensaje: 'cliente creado'} );
    }else {
        res.status(404).json( {error:'error al procesar solicitud - crear cliente'} );
    }
    
});



// modificar un cliente
router.patch('/:customer_id_aux', function(req, res) {
    const {customer_id_aux} = req.params;//del objeto request.params obtengo el id - sería la URL
    const {name, lastname, document} = req.body;//guardo los datos del body
    if(customer_id_aux) {
        array_.each(customers, function(customer, i) {//el segundo parametro de la segunda función es un indice
            if(customer.customer_id == customer_id_aux) {
                //actualizo los datos si es que no son undefined
                if(name != undefined) {
                    customer.name = name;
                }
                if(lastname != undefined) {
                    customer.lastname = lastname;
                }
                if(document != undefined) {
                    customer.document = document;
                }
                res.status(200).json(customer);
            }
        });
        
    } else{
        res.status(404).json( {error:'error al procesar solicitud - modificar el cliente'} );
    }
});




// borrar un cliente
router.delete('/:customer_id_aux', function(req, res) {
    const {customer_id_aux} = req.params;//del objeto request.params obtengo el id - sería la URL

    if(customer_id_aux) {
        //recorro el array de clientes
        array_.each(customers, function(customer, i) {//el segundo parametro de la segunda función es un indice

            if(customer.customer_id == customer_id_aux) {
                customers.splice(i, 1);// remuevo la unica pelicula que coincide con el indice.
                res.status(200).json('cliente borrado');
            } else{
                res.status(404).json( {error:'cliente no encontrado - error al borrar cliente'} );
            }
        });
    } else{
        res.status(404).json( {error:'error al procesar solicitud - borrar el cliente'} );
    }
});



module.exports = router;