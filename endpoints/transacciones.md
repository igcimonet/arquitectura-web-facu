### Recurso transacciones

**POST** /customers/{customer_id}/cards/{card_number}/transactions

```
{
    "amount": 0.0,
    "transaction_type": "string"
}
```

**Response**

| codigo      | descripción       |
|-------------|-------------------|
| 201         | operación exitosa |


----

**GET** /customers/{customer_id}/cards/{card_number}/transactions?transaction_id=A

*lista una transaccion*


**Response**

| codigo      | descripción       |
|-------------|-------------------|
| 200         | operación exitosa |

*body*
```
{
    "transaction_id": 0,
    "card_number": "string"
    "amount": 0.0,
    "transaction_type": "string"
}
```


----

**GET** /customers/{customer_id}/cards/{card_number}/transactions

*lista todas*

**Response**

| codigo      | descripción       |
|-------------|-------------------|
| 200         | operación exitosa |

*body*
```
{
    [
        {
            "customer_id": 0,
            "transaction_id": 0,
            "card_number": "string",
            "amount": 0,
            "transaction_type": "string"
        },
        {
            "customer_id": 0,
            "transaction_id": 0,
            "card_number": "string",
            "amount": 0,
            "transaction_type": "string"
        }
    ]
}
```
