# arquitectura-web-facu


#### Entidades
A continuación se detallan las entidades.

| customer    | card        | card_transactions |
|-------------|-------------|-------------------|
| customer_id | customer_id | transaction_id    |
| name        | card_number | card_number       |
| lastname    | balance     | amount            |
| card_number |             | transaction_type  |
| document    |             |                   |


### recursos - métodos

 ***customer***
| operaciones | métodos     |
|-------------|-------------|
| Alta        | POST        |
| Baja        | DELETE      |
| Modificar   | PUT         |

 ***card***
| operaciones | métodos     |
|-------------|-------------|
| Alta        | POST        |
| Baja        | DELETE      |
| Modificar   | PUT         |
| Consulta    | GET         |
| Listar      | GET         |

 ***card_transactions***
| operaciones | métodos     |
|-------------|-------------|
| Alta        | POST        |
| Consulta    | GET         |
| Listar      | GET         |
