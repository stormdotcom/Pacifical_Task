## Task | _Backend Asset & Positions API_

**Technologies Used** : Nodejs, ExpressJS, Postgresql, Docker

**Libraries Used** : sequelize, jsonwebtoken, bcrypt, pg

### Prerequisites

`Node v18.3.2
 postgres 14
`

### Project initial setup

- Install postgres db
- create database called `pacifical_task`

### API Documentation

This API handles the management of assets (vessels) and their positional data, including connectivity status. All endpoints require authentication using a token.

#### Authentication

### Get Auth Token

**Endpoint:** `POST /auth/token`

**Request:**

```json
{
  "username": "test",
  "password": "password123"
}
```

**Response:** A JWT token for further requests.

---

#### Asset Management

##### Create a New Asset

**Endpoint:** `POST /assets`

**Request:**

```json
{
  "name": "Vessel 1",
  "type": "Vessel",
  "description": "Test 01"
}
```

**Response:** The created asset with `id`, `name`, `type`, and `description`.

---

#### Get All Assets (Supports Filters)

**Endpoint:** `GET /assets`

**Query Parameters:**

- `type`: Filter assets by type (e.g., "Vessel").
- `status`: Filter by asset status (e.g., "online", "offline").
- Pagination support for future enhancements.

**Response:** A list of assets, including `id`, `name`, `type`, and `description`.

---

#### Update Asset Details

**Endpoint:** `PUT /assets/{id}`

**Request:**

```json
{
  "name": "Vessel edited 1",
  "type": "Vessel",
  "description": "Test edited 1"
}
```

**Response:** The updated asset details including `id`, `name`, `type`, and `description`.

---

#### Delete an Asset

**Endpoint:** `DELETE /assets/{id}`

**Response:**

```json
{
  "message": "Asset deleted successfully"
}
```

---

#### Get Asset by ID

**Endpoint:** `GET /assets/{id}`

**Response:**

```json
{
  "id": 1,
  "name": "Vessel 1",
  "type": "Vessel",
  "description": "Test 01",
  "latestPosition": {
    "latitude": 32.8244,
    "longitude": -122.2711,
    "status": "online"
  },
  "...other optional data"
}
```

---

#### Position Management

#### Update Position by Asset ID

**Endpoint:** `POST /positions/{assetId}`

**Request:**

```json
{
  "latitude": 32.8244,
  "longitude": -122.2711,
  "status": "online"
}
```

**Response:**

```json
{
  "id": 1,
  "latitude": 32.8244,
  "longitude": -122.2711,
  "status": "online",
  "assetId": 1
}
```

---

#### Get Latest Position by Asset ID

**Endpoint:** `GET /positions/{assetId}/latest`

**Response:**

```json
{
  "id": 1,
  "latitude": 32.8244,
  "longitude": -122.2711,
  "status": "online",
  "assetId": 1
}
```

---

#### Get Latest Positions for All Assets

**Endpoint:** `GET /positions/latest`

**Response:**

```json
[
  {
    "id": 1,
    "assetId": 1,
    "latitude": 32.8244,
    "longitude": -122.2711,
    "status": "online",
    "asset": {
      "name": "Vessel 1",
      "type": "Vessel"
    }
  },
  "...other position entries"
]
```

---

### Notes

- pass the authentication token in the header for all requests except `/auth/token`.
