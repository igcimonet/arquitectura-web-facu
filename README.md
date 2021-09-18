# arquitectura-web-facu


#### Entidades
A continuación se detallan las entidades.

| customer    | card        | card_transactions |
|-------------|-------------|-------------------|
| customer_id | customer_id | transaction_id    |
| name        | card_number | card_number       |
| lastname    | balance     | amount            |
| document    |             | transaction_type  |



### recursos - métodos

 ***customer***
| operaciones | métodos     |
|-------------|-------------|
| Alta        | POST        |
| Baja        | DELETE      |
| Modificar   | PATCH       |
| Consulta    | GET         |

 ***card***
| operaciones | métodos     |
|-------------|-------------|
| Alta        | POST        |
| Baja        | DELETE      |
| Consulta    | GET         |
| Listar      | GET         |

 ***card_transactions***
| operaciones | métodos     |
|-------------|-------------|
| Alta        | POST        |
| Consulta    | GET         |
| Listar      | GET         |

