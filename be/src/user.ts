import { Request, Response } from "express";
import DBService from "./dbservice";
import { Prisma } from "@prisma/client";

// Instantiate Users model controller
const Controller = new DBService("Users");

export async function searchUser(req: Request, res: Response) {
  try {
    const query = req.params.q;
    if (!query) return res.status(422).json({ message: `No query provided` });

    const result = await Controller.search(query);

    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: (err as Error).message || 'Internal Server Error' });
  }
}

export async function paginateUser(req: Request, res: Response) {
  try {
    const page = Number(req.params.page);

    if (!page) return res.status(422).json({ message: `No page number provided` });

    const result = await Controller.paginate(page);

    return res.status(200).json({
      page,
      result
    });
  } catch (err) {
    return res.status(500).json({ error: (err as Error).message || 'Internal Server Error' });
  }
}

export async function readUser(req: Request, res: Response) {
  try {
    const id = req.params.id;
    if (!id) return res.status(422).json({ message: `No user ID provided` });

    const result = await Controller.read(id);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: (err as Error).message || 'Internal Server Error' });
  }
}

export async function createUser(req: Request, res: Response) {
  try {
    const data: Prisma.UsersCreateInput = req.body;

    if (!data) return res.status(422).json({ message: `No user data provided` });

    const result = await Controller.create(data);
    return res.status(200).json(result);
  } catch(err) {
    return res.status(500).json({ error: (err as Error).message || 'Internal Server Error' });
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const data: Prisma.UsersCreateInput = req.body;

    if (!data) return res.status(422).json({ message: `No user data provided` });
    if (!data.id) return res.status(422).json({ message: `No user ID provided` });

    const result = await Controller.update(data);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: (err as Error).message || 'Internal Server Error' });
  }
}

export async function destroyUser(req: Request, res: Response) {
  try {
    if (!req.params.id) return res.status(422).json({ message: `No user ID provided` });

    const result = await Controller.destroy(req.params.id);
    return res.status(200).json(result);
  } catch(err) {
    return res.status(500).json({error: err});
  }
}