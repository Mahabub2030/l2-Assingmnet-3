# 📚 Library Management API

A full-featured RESTful API for managing books and borrowing in a library, built using **Express**, **TypeScript**, and **MongoDB (Mongoose)**.

---

## 🚀 Features

- 📖 Book CRUD (Create, Read, Update, Delete)
- 🔎 Filtering and Sorting by Genre, Date, etc.
- 📦 Borrow Books with Quantity and Due Date
- 📊 Borrow Summary with Aggregation Pipeline
- ✅ Schema Validation and Error Handling
- ⚙️ Mongoose Instance Method & Middleware
- 🧼 Clean Code with Modular Structure

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB**
- **Mongoose**
- **Dotenv**

---

## 📁 Project Structure
src/
├── app.ts
├── server.ts
├── config/
│ └── db.ts
├── modules/
│ ├── book/
│ │ ├── book.model.ts
│ │ ├── book.route.ts
│ │ ├── book.controller.ts
│ │ └── book.service.ts
│ └── borrow/
│ ├── borrow.model.ts
│ ├── borrow.route.ts
│ ├── borrow.controller.ts
│ └── borrow.service.ts
├── middlewares/
│ └── errorHandler.ts
├── utils/
│ └── sendResponse.ts
└── types/
└── global.d.ts


