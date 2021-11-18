# arquitectura-web-facu


#### Entidades
A continuación se detallan las entidades.

| customer    | card        | card_transactions |
|-------------|-------------|-------------------|
| customer_id | customer_id | customer_id       |
| name        | card_number | transaction_id    |
| lastname    | balance     | card_number       |
| document    |             | amount            |
|             |             | transaction_type  |



### recursos - métodos

 ***customer***
| operaciones | métodos     |
|-------------|-------------|
| Alta        | POST        |
| Baja        | DELETE      |
| Modificar   | PATCH       |
| Consulta    | GET         |

definición endpoints [clientes](https://github.com/igcimonet/arquitectura-web-facu/blob/main/endpoints/clientes.md)

 ***card***
| operaciones | métodos     |
|-------------|-------------|
| Alta        | POST        |
| Baja        | DELETE      |
| Consulta    | GET         |
| Listar      | GET         |

definición endpoints [tarjetas](https://github.com/igcimonet/arquitectura-web-facu/blob/main/endpoints/tarjetas.md)

 ***card_transactions***
| operaciones | métodos     |
|-------------|-------------|
| Alta        | POST        |
| Consulta    | GET         |
| Listar      | GET         |


definición endpoints [transacciones](https://github.com/igcimonet/arquitectura-web-facu/blob/main/endpoints/transacciones.md)
