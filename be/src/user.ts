import { Request, Response } from 'express';
import { prisma } from './prisma';

export async function create(req: Request, res: Response) {
  if (!req.body.data) {
    return res.status(422).json({ message: "Data are required." });
    /* ex:
    data: { username: "Name", password: "Pass", (etc) }
    */ 
  }

  try {
    const user = await prisma.users.create({
      data: req.body.data
    });

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: (err as Error).message, error: err });
  }
}

export async function read(req: Request, res: Response) {
  if (!req.body.condition) {
    return res.status(422).json({ message: "Condition are required." });
    /* ex:
    condition: { username: "Name", password: "Pass", (etc) }
    */
  }
  
  try {
    const user = await prisma.users.findMany({
      where: req.body.condition
    });

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: (err as Error).message, error: err });
  }
}

export async function update(req: Request, res: Response) {
  if (!req.body.condition || !req.body.data) {
    return res.status(422).json({ message: "Condition and data are required." });
    /* ex:
    condition: { username: "Name", password: "Pass", (etc) }
    data: { username: "NewName", password: "NewPass", (etc) }
    */
  }

  try {
    const finduser = await prisma.users.findMany({ where: req.body.condition });
    if (finduser.length == 0) {
      throw new Error('No users found');
    }

    const user = await prisma.users.update({
      where: req.body.condition,
      data: req.body.data
    });

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: (err as Error).message, error: err });
  }
}

export async function destroy(req: Request, res: Response) {
  if (!req.body.condition) {
    return res.status(422).json({ message: "Condition are required." });
    /* ex:
    condition: { username: "Name", password: "Pass", (etc) }
    */
  }

  try {
    const finduser = await prisma.users.findMany({ where: req.body.condition });
    if (finduser.length == 0) {
      throw new Error('No users found');
    }

    const user = await prisma.users.deleteMany({
      where: req.body.condition
    });

    return res.status(200).json({ message: "User deleted", data: user });
  } catch (err) {
    return res.status(500).json({ message: (err as Error).message, error: err });
  }
}