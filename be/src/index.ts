import express, { Application, Request, Response } from 'express';

require('dotenv').config();

const app: Application = express();

app.get('/', async (req: Request, res: Response) => {
  res.send({ message: 'Hello World!' });
});

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000');
});