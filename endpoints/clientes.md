### Recurso cliente

**POST** /customers

*body*
```json
{
    "name": "string",
    "lastname": "string",
    "document": 0
}
```

**Response**

| codigo      | descripción       |
|-------------|-------------------|
| 201         | operación exitosa |

*body*
```json
{
    "customer_id": 0,
    "name": "string",
    "lastname": "string",
    "document": 0
}
```

----

**DELETE** /customers/{customer_id}

**Response**

| codigo      | descripción       |
|-------------|-------------------|
| 200         | operación exitosa |


----


**PATCH** /customers/{customer_id}

*body*
```json
{
    "name": "string",
    "lastname": "string",
    "document": 0
}
```

**Response**

| codigo      | descripción       |
|-------------|-------------------|
| 200         | operación exitosa |

*body*
```json
{
    "customer_id": 0,
    "name": "string",
    "lastname": "string",
    "document": 0
}
```


----

**GET** /customers?customer_id=A

**Response**

| codigo      | descripción       |
|-------------|-------------------|
| 201         | operación exitosa |

*body*
```json
{
    "customer_id": 0,
    "name": "string",
    "lastname": "string",
    "document": 0
}
```
