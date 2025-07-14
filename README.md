# 🍔 Fast Food Shop API

A robust and scalable RESTful API for managing a fast food delivery system, built with **NestJS**, **Sequelize**, **PostgreSQL**, and **PassportJS**. Includes role-based access control, address geolocation, order management, and payment integration.

---

## 🚀 Tech Stack

- **Backend**: [NestJS](https://nestjs.com/)
- **ORM**: [Sequelize](https://sequelize.org/) + [sequelize-typescript](https://github.com/sequelize/sequelize-typescript)
- **Database**: PostgreSQL
- **Authentication**: PassportJS (JWT Strategy)
- **Documentation**: Swagger (auto-generated)
- **Package Manager**: pnpm

---

## 📦 Features Overview

### 1. 👤 User Management & Authentication

- Register, Login, Logout
- Forgot/Reset password
- Profile management
- Role-based access (Admin / Customer)
- JWT Authentication using Passport

### 2. 🏠 Address Management

- Add / update / delete address
- Set default address
- Get address list
- Get address coordinates
- Calculate shipping fee based on location & weight

### 3. 📂 Category Management

- View, create, update, delete categories (Admin only)
- Sort categories manually

### 4. 🛍 Product Management

- View, search, filter, and detail product
- CRUD operations (Admin only)
- Manage featured products

### 5. 🔄 Product Variant

- Manage product variations (size/type)
- Calculate final variant price
- CRUD operations (Admin only)

### 6. 🧂 Ingredient / Topping

- Manage ingredients/toppings
- Required ingredients logic
- CRUD operations (Admin only)

### 7. 🛒 Cart Management

- Add/update/remove products in cart
- Add/remove toppings
- Sync guest and logged-in user carts
- Calculate cart total
- Clear cart

### 8. 📦 Order Management

- Place orders
- View orders and order history
- Cancel & track orders
- Admin can update order status

### 9. 💰 Payment Integration

- Cash on Delivery (COD)
- Online Payment (VNPAY)
- Refund handling (Admin only)
- Update payment status

### 10. 🧾 Coupon System

- Admin: Create/update/delete coupons
- Users: Apply and validate coupons
- Calculate discounts

### 11. 🎁 User Coupon Management

- Assign coupons to user
- View and track usage history
- Use discount code

### 12. ⭐ Product Review

- Add/update/delete reviews
- View product ratings
- Calculate average ratings

### 13. 📊 Dashboard & Analytics (Admin)

- Revenue statistics
- Sales report
- Best-selling products
- Customer management
- System overview

### 14. 🔔 Notification System

- Order status updates
- Promotions & system notifications

### 15. 🔎 Search & Filter

- Search by product name
- Filter by category, price, rating
- Sort results

---

## 🧪 Swagger API Documentation

Swagger is automatically generated and available at:

```
http://localhost:3000/api
```

> You can test all routes, inputs, and headers directly from Swagger UI.

---

## 📂 Project Structure

```
src/
├── auth/               # Auth logic (Passport, JWT, guards)
├── user/               # User module
├── address/            # Address module
├── category/           # Category module
├── product/            # Product and variants
├── ingredient/         # Topping system
├── cart/               # Cart logic
├── order/              # Orders
├── payment/            # Payment integrations
├── coupon/             # Discount management
├── review/             # Product reviews
├── notification/       # System notifications
├── dashboard/          # Analytics
├── common/             # Interceptors, filters, decorators, utils
└── main.ts             # Application entry point
```

---

## 📄 Setup & Run

### 1. Clone repo

```bash
git clone https://github.com/your-username/fast-food-shop.git
cd fast-food-shop
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Setup environment

```bash
cp .env.example .env
```

Fill in your PostgreSQL credentials and secret keys.

### 4. Run development server

```bash
pnpm start:dev
```

### 5. Swagger available at:

```
http://localhost:3000/api
```

---

## 🛡 Security

- JWT Authentication with refresh token support
- Role-based route protection (admin, customer)
- Input validation via `class-validator`

---

## 📌 TODOs

- [ ] Unit & E2E tests
- [ ] Rate limiting
- [ ] OTP for phone verification
- [ ] Deploy to production (Docker, CI/CD)

---

## 🤝 Contributing

Feel free to submit issues or pull requests.

---

## 📝 License

MIT License.

---

## 📬 Contact

**Dev**: Nguyễn Trung Tín  
📧 Email: [nttindev2304@gmail.com](mailto:nttindev2304@gmail.com)
