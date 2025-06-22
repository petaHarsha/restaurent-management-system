# Restaurant Management System

A comprehensive system for managing restaurant operations including table bookings, menu management, staff administration, and inventory tracking.

## Features

- **User Authentication**: Customers can register, login, and manage their profiles
- **Table Booking**: Customers can book tables with pre-ordering options
- **Menu Management**: Admin can manage the restaurant menu with categories
- **Staff Management**: Admin can manage staff members and their roles
- **Inventory Tracking**: Track restaurant inventory and supplies
- **Analytics Dashboard**: View sales reports and popular items

## Technologies

### Frontend
- HTML5, CSS3, JavaScript
- Responsive design with media queries
- Font Awesome for icons
- Google Fonts (Poppins)

### Backend
- Node.js with Express.js
- MongoDB with Mongoose
- JWT for authentication
- RESTful API design

## Project Structure
restaurant-system/
├──restaurant-backend/                  # Node.js/Express backend
│   ├── config/
│   │   ├── db.js             # Database configuration
│   │   └── config.js         # App configuration
│   ├── controllers/
│   │   ├── adminController.js # Admin panel logic
│   │   ├── authController.js  # Authentication logic
│   │   ├── bookingController.js # Booking management
│   │   ├── menuController.js  # Menu management
│   │   └── staffController.js # Staff management
│   ├── models/
│   │   ├── User.js           # User model
│   │   ├── MenuItem.js       # Menu items
│   │   ├── Staff.js          # Staff members
│   │   ├── Inventory.js      # Inventory items
│   │   ├── Booking.js        # Reservations
│   │   └── Table.js          # Restaurant tables
│   ├── routes/
│   │   ├── adminRoutes.js    # Admin panel routes
│   │   ├── authRoutes.js     # Authentication routes
│   │   ├── bookingRoutes.js  # Booking routes
│   │   ├── menuRoutes.js     # Menu routes
│   │   └── staffRoutes.js    # Staff routes
│   ├── middlewares/
│   │   └── auth.js           # Authentication middleware
│   ├──utils/
│   │   └── logger.js         # loggers in the utils
│   │   └── validation.js     # jalidation of the coe
|   |── .env                  # Environment variables
│   ├── server.js             # Main server file
│   └── package.json          # Dependencies
└── retaurent-frontend/                 # Frontend code
    ├── assets/
    │   ├── css/              # Global styles
    │   ├── js/               # Global scripts
    │   └── images/           # All images
    ├── admin/
    │   ├── admin.html        # Admin dashboard
    │   ├── admin.css         # Admin-specific styles
    │   └── admin.js          # Admin-specific scripts
    ├── booking/
    │   ├── booking.html      # Booking interface
    │   ├── booking.css       # Booking styles
    │   └── booking.js        # Booking logic
    ├── menu/
    │   ├── menu.html         # Menu interface
    │   ├── menu.css          # Menu styles
    │   └── menu.js           # Menu logic
    ├── auth/
    │   ├── login.html        # Login page
    │   ├── register.html     # Registration page
    │   ├── auth.css          # Auth styles
    │   └── auth.js           # Auth logic
    └── index.html            # Landing page
