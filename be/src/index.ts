// Core dependencies and type declarations
import express, { Application, Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import cors from 'cors';

// Core functionalities
import { register, verifyToken, login, logout } from './auth';

dotenv.config(); // Load environment variables from .env file

const app: Application = express(); // Bootstrap express app
const prisma: PrismaClient = new PrismaClient(); // Prisma client

app.use(cors());

app.use(express.json()); // Parse JSON requests

app.use((err: Error, req: Request, res: Response, next: NextFunction) => res.status(500).send({ message: err.message })); // Middleware to handle errors on the server

// * Auth routes
app.route("/auth")
  .post(register)
  .get(verifyToken)
  .put(login)
  .delete(logout);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});