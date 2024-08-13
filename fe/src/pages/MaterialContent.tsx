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
import axios from "axios";
import { Button } from "@mui/material";

export default function App() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    uploadFile: async (file) => {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const res = await axios.post("https://tmpfiles.org/api/v1/upload", formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        return res.data.data.url.replace(
          "tmpfiles.org/",
          "tmpfiles.org/dl/"
        );
      } catch (err) {
        console.error(err);
        alert("Error uploading file");
      }
    },
  });

  // Renders the editor instance using a React component.
  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className={`flex items-center justify-between`}
      >
        {/* Left: title, description, level */}
        <div>
          <input
            type="text"
            name="title"
            className={`font-bold text-2xl`}
            placeholder="Judul"
          />

          <textarea
            name="description"
            placeholder="Deskripsi"
            className={``}
          ></textarea>

          <label htmlFor="level">Level</label>
          <select name="level" className={`text-opacity-50`}>
            <option selected value="1">
              1
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        {/* Right: publish, update, delete button */}
        <div className={`flex space-x-2`}>
          {/* <button className={`text-white bg-red-500 p-2 rounded`}>
            Publish
          </button> */}
          
          {/* blud diskriminasi semua animation terhadap ripple */}
          {/* transform: scale(1.05) is better, harder, stronger */}

          <Button>Publish</Button>

          {/* if new content -> hidden */}
          <button className={`text-white bg-red-500 p-2 rounded hidden`}>
            Update
          </button>
          <button className={`text-white bg-red-500 p-2 rounded hidden`}>
            Delete
          </button>
        </div>
      </form>

      <hr className={`w-full`} />
      
      {/* Content */}
      <BlockNoteView theme={`light`} editor={editor} />
    </>
  );
}
