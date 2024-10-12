# QuickLifts

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

4. **Set up environment variables**:
   Create a `.env` file in both the backend and frontend directories with the following:

   **Backend (`backend/.env`)**:

   ```bash
   MONGODB_URI=mongodb://localhost:27017/yourdbname
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   FACEBOOK_CLIENT_ID=your_facebook_client_id
   FACEBOOK_CLIENT_SECRET=your_facebook_client_secret
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

   **Frontend (`frontend/.env`)**:

   ```bash
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

5. **Set up the MongoDB database**:
   If you're using a local MongoDB instance, ensure it’s running. If you’re using MongoDB Atlas, configure the connection string in your `.env` file.

6. **Run the development servers**:

   - **Backend**: In the `backend` directory, run:
     ```bash
     npm run dev
     ```
   - **Frontend**: In the `frontend` directory, run:
     ```bash
     npm run dev
     ```

7. **Open the app in the browser**:
   The frontend will be running at `http://localhost:3000` and the backend at `http://localhost:3001`.

## API Endpoints

### User Routes

- `POST /auth/signup` - Create a new user
- `POST /auth/login` - Login user with OAuth or JWT
- `GET /users/me` - Get logged-in user information

### Driver Routes

- `POST /drivers/signup` - Register a new driver
- `GET /drivers/me` - Get logged-in driver information
- `POST /drivers/availability` - Update driver availability status

### Ride Routes

- `POST /rides` - Create a new ride request
- `GET /rides/:id` - Get ride details
- `POST /rides/:id/status` - Update ride status (requested, accepted, in-progress, completed)

## Roadmap

### Planned Features:

- **Driver Ratings**: Allow users to rate and review drivers.
- **Promotions**: Create a promotion and discount feature for users.
- **Ride History Export**: Enable users to export their ride history in CSV format.

## Contributing

We welcome contributions to improve **QuickLifts**. Please open an issue or submit a pull request with your suggestions!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
