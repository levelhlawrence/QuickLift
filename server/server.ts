import { app, port, Request, Response } from "./api/index";
import swagger from "express-jsdoc-swagger";

// live Documentation
swagger(app)({
  info: {
    title: "Quick Lift",
    version: "1.0.0",
    description:
      "QuickLifts is a ride-sharing application inspired by other popular ride-share companies. It allows users to conveniently book rides with nearby drivers. Built using **Vite/React** with **TypeScript** for the frontend, **Node.js** and **Express** for the backend, and **MongoDB** for the database. The app provides OAuth-based authentication for both users and drivers, with real-time ride updates and a ride-matching system.",
  },
  baseDir: "./app/routes",
  swaggerUIPath: "/",
  filesPattern: "./**/*.ts",
});

// Starting server
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
