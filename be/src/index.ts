// Core dependencies and type declarations
import express, { Application, Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import cors from 'cors';

// Core functionalities
import { register, verifyToken, login, logout } from './auth';
import { store } from './material';
import multer from 'multer';

dotenv.config(); // Load environment variables from .env file

const app: Application = express(); // Bootstrap express app
const prisma: PrismaClient = new PrismaClient(); // Prisma client

app.use(cors()); // Handle CORS

app.use(express.json()); // Parse JSON requests

app.use((err: Error, req: Request, res: Response, next: NextFunction) => res.status(500).send({ message: err.message })); // Middleware to handle errors on the server

// Middleware to handle file uploads
const fileUploadMiddleware = multer({ dest: 'uploads/' }).single('file');

// * Auth routes
app.route("/auth")
  .post(register)
  .get(verifyToken)
  .put(login)
  .delete(logout);

// * Material routes
app.route("/material")
  .post(fileUploadMiddleware, store);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});