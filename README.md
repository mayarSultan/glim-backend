#  Glim Store — Backend

REST API for the Glim handmade crochet store, built with Node.js, Express, and MongoDB.

![Node.js](https://img.shields.io/badge/Node.js-18-339933?style=flat&logo=node.js)
![Express](https://img.shields.io/badge/Express-5-000000?style=flat&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat&logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-000000?style=flat&logo=jsonwebtokens)

---

##  API Endpoints

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |
| POST | `/api/products` | Create product |

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register new user |
| POST | `/api/auth/login` | Login & receive JWT |
| GET | `/api/auth/me` | Get current user (protected) |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/orders` | Place new order (protected) |
| GET | `/api/orders/myorders` | Get user's orders (protected) |
| GET | `/api/orders/:id` | Get single order (protected) |

---

##  Tech Stack

- **Node.js** + **Express 5**
- **MongoDB Atlas** with **Mongoose**
- **JWT** for authentication
- **bcryptjs** for password hashing
- **dotenv** for environment variables
- **cors** for cross-origin requests

---

##  Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account

### Installation

```bash
# Clone the repo
git clone https://github.com/mayarSultan/glim-backend.git
cd glim-backend

# Install dependencies
npm install

# Create .env file
touch .env
```

Add these to your `.env` file:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```

```bash
# Seed the database
node seed.js

# Start development server
npm run dev
```

API runs on [http://localhost:5000](http://localhost:5000)

---

## Project Structure

---

##  Related

- **Frontend repo:** [glim-store](https://github.com/mayarSultan/glim-store)

---

## Author

**Mayar Sultan** — built as a portfolio project to demonstrate full-stack MERN development skills.