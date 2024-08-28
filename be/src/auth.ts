import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { prisma } from './prisma';

export async function register(req: Request, res: Response) {
  if (!req.body.username || !req.body.password) {
    return res.status(422).json({ message: "Username and password are required." });
  }

  try {
    const user = await prisma.users.create({
      data: {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
      }
    });

    // Login the user immediately after registration
    const loggedUser = await prisma.users.update({
      where: { id: user.id },
      data: {
        remember_token: crypto.randomBytes(16).toString("hex")
      }
    })

    // Hide password
    loggedUser.password = "";

    return res.status(200).json(loggedUser);
  } catch (err) {
    return res.status(500).json({ message: (err as Error).message, error: err });
  }
}

export async function verifyToken(req: Request, res: Response) {
  const rememberToken = (req.headers.authorization as string).replace("Bearer ", "");

  if (!rememberToken) {
    return res.status(422).json({ message: "Remember token is required and must be a string." });
  }

  try {
    await prisma.users.findUniqueOrThrow({ where: { remember_token: rememberToken as string } });
    return res.status(200).json({ message: "User found" });
  } catch (err) {
    return res.status(500).json({ message: "Invalid token" });
  }
}

export async function login(req: Request, res: Response) {
  if (!req.body.username || !req.body.password) {
    return res.status(422).json({ message: "Username and password are required." });
  }

  try {
    const user = await prisma.users.findUniqueOrThrow({ where: { username: req.body.username } });
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const token = crypto.randomBytes(32).toString("hex");
    const loggedUser = await prisma.users.update({ where: { id: user.id }, data: { remember_token: token } });

    // Hide password
    loggedUser.password = "";

    return res.status(200).json(loggedUser);
  } catch (err) {
    return res.status(500).json({ message: (err as Error).message, error: err });
  }
}

export async function logout(req: Request, res: Response) {
  if (!req.headers.authorization || req.headers.authorization == undefined) {
    return res.status(422).json({message: "Authorization is required."});
  }

  const rememberToken = (req.headers.authorization as string).replace("Bearer ", "");

  if (!rememberToken) {
    return res.status(422).json({ message: "Remember token is required and must be a string." });
  }

  try {
    await prisma.users.update({ where: { remember_token: rememberToken as string }, data: { remember_token: null } });
    return res.status(200).json({ message: "User logged out" });
  } catch (err) {
    return res.status(500).json({ message: (err as Error).message, error: err });
  }
}