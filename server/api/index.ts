import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import db from "./db/database";

const app: Express = express();

// env active
dotenv.config();

// Set port
const port = process.env.PORT || 3000;

// Database
db();

export { app, port, Request, Response };
