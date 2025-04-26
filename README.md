# 🚴‍♂️ Bike Shop Application

A Bike Shop platform built with full-stack technologies, offering secure authentication, smooth product management, responsive design, and a user-friendly shopping experience.

## Live Demo: https://store-pro-three.vercel.app

## ✨ Features
🔒 User Registration & Authentication (Role-Based)
Secure registration and login with hashed passwords.

- JWT (JSON Web Token) authentication is stored in cookies.
- Role-based access: Customer (default) and Admin (manually assigned).
- Logout functionality to clear the session.

## 🌐 Public Routes
### Home Page:

- Responsive navbar with logo, links, and authentication buttons.
- Attractive banner section and featured products.
- Extra sections and a detailed footer.

### All Products Page:

- Dynamic search and advanced filtering (brand, model, price, category, availability).
- Product cards with a "View Details" button.
- Product Details Page:
- A detailed view of the product is available with a "Buy Now" option.

### About Page:

- Information about the shop and its mission.

## 🔒 Private Routes
Checkout Page:

- Order form with stock validation.
- Payment integration using SurjoPay.

## Dashboard:

### Admin:

- Manage users (deactivate accounts).
- Manage products (CRUD operations).
- Manage orders (CRUD operations, status updates).

### Customer:

- View and manage orders.
- Update password securely.

## 🎨 UI/UX Design
- Fully responsive on mobile, tablet, and desktop devices.
- Loading indicators during API calls.
- Toast notifications for key actions.
- Clear and friendly error handling (invalid credentials, duplicate emails, out-of-stock errors).

## ⚙️ Tech Stack

## Frontend: 

### Frameworks & Tools
- Vite — Fast development and build tool
- TypeScript — Strongly typed JavaScript
- React — Frontend library
- TailwindCSS — Utility-first CSS framework
- Ant Design (antd) — UI Components library
- Redux Toolkit — State management
- Redux Persist — Persist Redux state
- React Router DOM — Routing

### Useful Libraries
- AOS — Animate on scroll
- JWT Decode — Decode JWT tokens
- React Hook Form — Form handling
- Zod — Schema validation
- Sonner — Toast notifications
- React Spinners — Loaders
- Recharts — Charts & graphs
- React World Flags — Display flags
- Keen Slider — Sliders and carousels
- React Icons — Icon pack

- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose)
- Authentication: JWT, bcrypt
- Payment Gateway: SurjoPay
- Hosting:  Vercel 

## 🚀 Getting Started
Prerequisites
Node.js installed

Installation
Clone the repository:

git clone https://github.com/your-username/bike-shop-app.git
cd bike-shop-app

# Install frontend dependencies
npm install

cd frontend
npm run dev





