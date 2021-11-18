### Recurso tarjeta

**POST** /customers/{customer_id}/cards


**Response**

| codigo      | descripción       |
|-------------|-------------------|
| 201         | operación exitosa |

*body*
```
{
    "customer_id": 0
    "card_number": "string"
    "balance": 0.0,
}
```


----

**DELETE** /customers/{customer_id}/cards/{card_number}

**Response**

| codigo      | descripción       |
|-------------|-------------------|
| 200         | operación exitosa |



----

**GET** /customers/{customer_id}/cards?card_number=A

*lista una tarjeta*

**Response**

| codigo      | descripción       |
|-------------|-------------------|
| 200         | operación exitosa |

*body*
```
{
    "customer_id": 0
    "card_number": "string"
    "balance": 0.0,
}
```


----

**GET** /customers/{customer_id}/cards

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
            "card_number": "string"
            "balance": 0.0,
        },
        {
            "customer_id": 0
            "card_number": "string"
            "balance": 0.0,
        }
    ]
}
```
