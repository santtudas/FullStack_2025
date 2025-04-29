# Henkilö API

This is a basic RESTful API built with **Node.js**, **Express**, and **MongoDB** for managing `henkilö` (person) data. The API allows you to use CRUD to manage people records.

---

## Base URL

```
http://localhost:3000/api
```

---

## API Endpoints

### `/getall`

**Description:** Get a list of all `henkilö` documents.

- **Method:** GET  
- **URL:** `/api/getall`

####  Response:
```json
[
  {
    "_id": "661e6c44fd30652f4b7b362a",
    "name": "Erkki Esimerkki",
    "email": "erkki@email.com",
    "age": 44,
    "phone": "041234567"
  }
]
```

---

### `/:id`

**Description:** Get a single person by ID.

- **Method:** GET  
- **URL:** `/api/:id`

#### Response:
```json
{
  "_id": "661e6c44fd30652f4b7b362a",
  "name": "Erkki Esimerkki",
  "email": "erkki@email.com",
  "age": 44,
  "phone": "041234567"
}
```

#### Error messages:
```json
{ "error": "Invalid ID format" }
```
or
```json
{ "error": "Document not found" }
```

---

### POST `/add`

**Description:** Add a new person.

- **Method:** POST  
- **URL:** `/api/add`  
- **Body (JSON):**
```json
{
  "name": "Erkki Esimerkki",
  "email": "erkki@email.com",
  "age": 44,
  "phone": "041234567"
}
```

#### Response:
```json
{
  "_id": "661e6c44fd30652f4b7b362a",
  "name": "Erkki Esimerkki",
  "email": "erkki@email.com",
  "age": 44,
  "phone": "041234567"
}
```

#### Error messages:
```json
{ "error": "name must be at least 3 characters" }
```

---

### PATCH `/update/:id`

**Description:** Update a person by ID.

- **Method:** PATCH  
- **URL:** `/api/update/:id`  
- **Body (JSON):**
```json
{
  "age": 45
}
```

#### Response:
```json
{
  "_id": "661e6c44fd30652f4b7b362a",
  "name": "Erkki Esimerkki",
  "email": "erkki@email.com",
  "age": 45,
  "phone": "041234567"
}
```

---

### DELETE `/delete/:id`

**Description:** Delete a person by ID.

- **Method:** DELETE  
- **URL:** `/api/delete/:id`

#### Response:
```json
{
  "message": "Document deleted successfully",
  "deletedHenkilo": {
    "_id": "661e6c44fd30652f4b7b362a",
    "name": "Erkki Esimerkki",
    "email": "erkki@email.com",
    "age": 44,
    "phone": "041234567"
  }
}
```

#### Error messages:
```json
{ "error": "Document not found" }
```

---

## Error Handling

The API returns appropriate status codes and error messages for:

- Malformed IDs  
- Missing required fields  
- Validation errors  
- Database errors  
- Unknown endpoints (404)

---