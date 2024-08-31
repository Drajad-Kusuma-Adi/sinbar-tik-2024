// Core dependencies and type declarations
import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';

// Core functionalities
import { register, verifyToken, login, logout } from './auth';
import { create, read, update, destroy } from './user';
import multer from 'multer';
import { Dropbox } from 'dropbox';

dotenv.config(); // Load environment variables from .env file

// export const app: Application = express(); // Bootstrap express app

// app.use(cors()); // Handle CORS

// app.use(express.json()); // Parse JSON requests

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => res.status(500).send({ message: err.message })); // Middleware to handle errors on the server

export function createApp(): express.Application {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500).send({ message: err.message });
  });

  return app;
}

export const app = createApp();

// Middleware to handle file uploads
const fileUploadMiddleware = multer({ dest: 'uploads/' }).single('file');
const tempFileUploadMiddleware = multer({ dest: 'temp/' }).single('file');

// * Auth routes
app.route("/auth")
  .post(register)
  .get(verifyToken)
  .put(login)
  .delete(logout);

// * User routes
app.route("/user")
  .post(create)
  .get(read)
  .put(update)
  .delete(destroy);

// * Material routes
app.route("/material")

// * Misc routes
// Post tempfile route
app.post(`/tempfile`, async function (req: Request, res: Response) {
  try {
    const dbx = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN });
    const file = req.file;

    if (!file) return res.status(422).json({ message: 'No file uploaded' });

    const fileContents = fs.readFileSync(file.path);

    const response = await dbx.filesUpload({
      // TODO: Add 'temp' folder to the path
      path: `/${crypto.randomUUID() + '.' + file.originalname}`,
      contents: fileContents,
      mode: { '.tag': 'overwrite' },
    });

    if (!response.result.path_lower) throw new Error("File pathname does not exist on the response result");

    const sharedLink = await dbx.sharingCreateSharedLinkWithSettings({
      path: response.result.path_lower,
    });

    // Direct link to the file
    const url = sharedLink.result.url.replace('dl=0', 'raw=1');

    // ID of the file
    const id = response.result.id;

    // Clean up the uploaded file from the server
    fs.unlinkSync(file.path);

    return res.status(200).json({ id, url });
  } catch (err) {
    return res.status(500).json({ message: "Error uploading file", error: err });
  }
});
// Delete files on temps
app.delete(`/tempfile`, async function (req: Request, res: Response) {
  try {
    const ids = req.body.ids;
    if (!ids) return res.status(422).json({ message: `No file IDs provided` });

    const dbx = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN });

    // TODO: Delete files from the 'temp' folder only
    await dbx.filesDeleteBatch({ entries: req.body.ids });

    return res.status(200).json({ message: "File deleted" });
  } catch (err) {
    return res.status(500).json({ message: "Error deleting file", error: err });
  }
});

export function startServer(app: express.Application, port = process.env.PORT || 3000) {
  return app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

export const server = startServer(app);