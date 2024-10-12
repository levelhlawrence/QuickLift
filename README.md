# Project Name: QuickLifts

## Description

QuickLifts is a ride-sharing application inspired by other popular ride-share companies. It allows users to conveniently book rides with nearby drivers. Built using **Vite/React** with **TypeScript** for the frontend, **Node.js** and **Express** for the backend, and **MongoDB** for the database. The app provides OAuth-based authentication for both users and drivers, with real-time ride updates and a ride-matching system.

## Features

- **User and Driver Authentication**: OAuth (Google, Facebook) for users and drivers.
- **Ride Booking**: Users can book rides by selecting pickup and drop-off locations using Google Maps.
- **Real-Time Ride Updates**: Status updates for rides are handled in real time using WebSockets.
- **Driver Availability**: Drivers can update their availability and accept ride requests.
- **Fare Calculation**: Fare is calculated based on distance.
- **Payment Integration**: Integration with a payment gateway (e.g., Stripe).

## Tech Stack

### Frontend

- **Vite + React + TypeScript**: A fast and modern frontend framework for building highly responsive user interfaces.
- **Mapbox**: Used for location selection and real-time ride tracking.

### Backend

- **Node.js + Express**: Backend server responsible for API endpoints and ride request management.
- **MongoDB**: NoSQL database for flexible data management, storing user, driver, and ride data.

### Authentication

- **OAuth**: Google and Facebook OAuth through Passport.js or Auth0 for user and driver authentication.

### Other Tools

- **WebSockets**: Real-time ride updates and driver availability. [still under consideration]
- **Stripe**: Integrated for handling payments securely.

## Getting Started

### Prerequisites

To run the project locally, you’ll need:

- **Node.js** (v16 or above)
- **MongoDB** (locally or using MongoDB Atlas)
- **Google Maps API Key**
- **Stripe Account** (or other payment processor if required)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/levelhlawrence/QuickLift.git
   ```

2. **Navigate into the directory**:

   ```bash
   cd QuickLift
   ```

3. **Install dependencies** for both frontend and backend:

   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```
