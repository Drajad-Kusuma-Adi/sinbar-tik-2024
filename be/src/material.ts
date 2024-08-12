import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { Dropbox } from 'dropbox';
import fs from 'fs';

const prisma: PrismaClient = new PrismaClient();

// TODO: Convert this into store full material data, for now it's just testing upload media to dropbox
export const store = async (req: Request, res: Response) => {
  try {
    const dbx = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN });
    const file = req.file;

    if (!file) {
      return res.status(422).json({ message: 'No file uploaded' });
    }

    const fileContents = fs.readFileSync(file.path);

    const response = await dbx.filesUpload({
      path: `/${crypto.randomUUID() + '.' + file.originalname}`,
      contents: fileContents,
      mode: { '.tag': 'overwrite' },
    });

    const sharedLink = await dbx.sharingCreateSharedLinkWithSettings({
      path: response.result.path_lower!,
    });

    const url = sharedLink.result.url.replace('dl=0', 'raw=1'); // Direct link to the file

    // Clean up the uploaded file from the server
    fs.unlinkSync(file.path);

    return res.status(200).json({ url });
  } catch (err) {
    return res.status(500).json({ message: "Error uploading file", error: err });
  }
};
