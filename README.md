# 🔷 Zerodha Clone

A full-stack **MERN (MongoDB, Express.js, React, Node.js)** based web application that replicates the design and functionality of **Zerodha**, India’s leading stock brokerage platform.

This clone features a beautiful landing page, interactive signup process, investment options section, FAQs, and more — built using modern technologies and a clean, scalable architecture.

---

## 📌 Features

### 🖥 Frontend (React)

- ⚡ Fully responsive landing page
- 🔒 Signup/Login forms with OTP interface
- 📊 Investment options (Stocks, Mutual Funds, IPO, F&O)
- 👥 Account type cards (Individual, NRI, Corporate, etc.)
- 📃 Step-by-step account opening guide
- 💸 Unbeaten pricing layout
- ❓ FAQs accordion
- 🚦 Smooth routing with React Router

### 🌐 Backend (Node.js + Express)

- 🔐 REST API for authentication
- 🔑 JWT-based Auth system
- 🧠 MongoDB for user data
- ⚙️ `.env` support for secure configs

### 🗃️ Database (MongoDB)

- MongoDB Atlas connection
- Clean schema design

---

## ⚙️ How It Works

1. **Landing Page**  
   Users land on a clean homepage showcasing pricing, benefits, steps to open a Demat account, FAQs, and more.

2. **Explore Account Types**  
   Users can view different account types (Individual, HUF, NRI, Minor, Corporate) and select one to proceed with.

3. **Signup & Login**  
   A secure form allows users to register with their email. OTP-style UI mimics real-world Zerodha flow.  
   Login functionality uses **JWT-based authentication** for security.

4. **API Communication**  
   The frontend communicates with the backend through **RESTful APIs** using `axios`. Data like user info and account types are fetched and stored.

5. **Authentication Flow**

   - On signup/login, a **JWT token** is issued.
   - Token is stored in local storage or cookies.
   - Protected routes use token verification middleware in Express.

6. **Database Connection**  
   All user data, auth tokens, and other models are securely stored in **MongoDB Atlas**.

7. **Environment Configs**  
   Backend and frontend both use `.env` files to manage API keys, DB URLs, and sensitive data.

8. **Routing**

   - **React Router** handles frontend navigation (pages like Home, SignUp, FAQs).
   - **Express Router** handles API routing (`/api/auth/register`, `/api/user`, etc.)

9. **Deployment Ready**  
   The build folder generated from React is deployable on services like **Vercel**, **Netlify**, or can be served via **Node/Express** backend.
