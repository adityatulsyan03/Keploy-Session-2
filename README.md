# 👤 Users Backend (Keploy Assignment)

A simple full-stack **CRUD application** to manage user data. Built with **Node.js**, **Express**, and **PostgreSQL (NeonDB)** for the backend, and a clean **HTML/JavaScript frontend** for interacting with the REST API.

---

## 📦 Tech Stack

| Layer      | Technology              |
|------------|--------------------------|
| Backend    | Node.js, Express         |
| Database   | PostgreSQL (via NeonDB)  |
| Frontend   | HTML, JavaScript         |
| Testing    | Postman, cURL            |

---

## 📁 Folder Structure

```
users-backend/
├── controllers/
│ └── userController.js
├── frontend/
│ ├── index.html
│ └── style.css
├── routes/
│ └── userRoutes.js
├── db.js
├── index.js
├── .env
├── package.json
└── README.md

```
---

## 🖥️ Frontend

- Located in the `/frontend` directory
- Uses `fetch()` to call backend API
- Features:
  - Add new users
  - View all users
  - Search by ID
  - Delete users
- Automatically refreshes the user list after changes

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/users-backend.git
cd users-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory:

```
DATABASE_URL=your_neon_db_connection_string
PORT=8080
```
> Replace `your_neon_db_connection_string` with the actual connection string from your  [NeonDB Dashboard](https://neon.tech).

---

## 🔧 4. Running the App

```bash
npm start
```

- The backend runs on: http://localhost:8080

- It auto-creates the users table on startup

---

## 🌐 Access the Frontend

- Open your browser and go to:

```
http://localhost:8080
```

You’ll see a form to add users and a list of users below it.

---

## 🔌 REST API Reference

All routes are prefixed with `/api/users`


| Method | Endpoint       | Description           |
|--------|----------------|-----------------------|
| GET    | /              | Get all users         |
| POST   | /              | Create a new user     |
| GET    | /:id           | Get single user by ID |
| PUT    | /:id           | Update user by ID     |
| DELETE | /:id           | Delete user by ID     |

---

## 📨 Sample POST Request

**POST** `/api/users`

Use the following JSON structure to create a new user:

```json
{
  "name": "Aditya",
  "email": "tulsyanaditya03@gmail.com",
  "age": 21
}
```

---

## 🛢️ Database Integration

This project uses **NeonDB (PostgreSQL)** as its database. Integration is done via the official [`pg`](https://www.npmjs.com/package/pg) client.

- `db.js` handles connection pooling and table creation.
- SQL queries are written directly in `userController.js`.

The users table schema:

```sql
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  age INT
);
```

---

## ✅ API Testing (curl)

```bash
# Create User
curl -X POST http://localhost:8080/ -H "Content-Type: application/json" -d '{"name":"Aditya","email":"tulsyanaditya03@gmail.com","age":21}'

# Get All Users
curl http://localhost:8080/

# Get User by ID
curl http://localhost:8080/1

# Update User
curl -X PUT http://localhost:8080/1 -H "Content-Type: application/json" -d '{"name":"Aditya","email":"tulsyanaditya03@gmail.com","age":21}'

# Delete User
curl -X DELETE http://localhost:8080/1
```
---

## 📋 License

- This project is built for educational purposes and Keploy assignments. You are free to reuse or modify it for your learning and development.

---

Let me know if you’d like me to:
- Add shields.io badges (build, license, tech stack)
- Create a dark theme preview for your frontend
- Generate a Postman collection or OpenAPI spec for this API

---