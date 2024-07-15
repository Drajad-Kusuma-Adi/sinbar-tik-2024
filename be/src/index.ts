import express, { Application, Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

require('dotenv').config();

const app: Application = express();
const prisma = new PrismaClient()

app.use(express.json()); // parse JSON requests

app.get('/', async (req: Request, res: Response) => {
  res.send({ message: 'Hello World!' });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send({ message: 'Internal Server Error' });
});

async function main() {
  try {
    // Write your Prisma Client queries here
    const result = await prisma.user.findMany();
    console.log(result);
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => console.error(e)).finally(() => {
  app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000');
  });
});