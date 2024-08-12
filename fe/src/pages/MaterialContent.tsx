// This is using react-quill, use blocknote below instead
// import { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// export default function MaterialContent() {
//   const [value, setValue] = useState('');

//   return <ReactQuill theme="snow" value={value} onChange={setValue} defaultValue='Tulis materi di sini...' />
// }

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { api } from "../utils/api";
import { AxiosResponse } from "axios";

export default function App() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote(
    {
      uploadFile: async (file) => {
        try {
          const formData = new FormData();
          formData.append(`file`, file);

          const res: AxiosResponse = await api.post(`/material`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });

          return res.data.url;
        } catch (err) {
          console.error(err);
          alert("Error uploading file");
        }
      }
    }
  );

  // Renders the editor instance using a React component.
  return (
    <>
      {/* TODO: input for title on the left and edit delete at the right */}
      <BlockNoteView theme={`light`} editor={editor} />
    </>
  );
}
 