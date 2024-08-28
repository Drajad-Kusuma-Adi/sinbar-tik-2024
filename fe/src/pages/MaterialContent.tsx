import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Block } from "@blocknote/core";
import { api } from "../utils/api";

export default function App() {
  // Store BlockNote's data blocks
  const [dataBlocks, setDataBlocks] = useState<Block[]>();
  const [files, setFiles] = useState<string[]>([]);

  // Get and set saved document from localStorage
  useEffect(() => {
    const dataBlocks = localStorage.getItem(`dataBlocks`);
    if (dataBlocks) {
      setDataBlocks(JSON.parse(dataBlocks));
    }
  }, [])

  // Creates a new BlockNote editor instance.
  const editor = useCreateBlockNote({
    uploadFile: async (file) => {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const res = await api.post(`/tempfile`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        });

        setFiles([...files, res.data.id]);

        return res.data.url;
      } catch (err) {
        console.error(err);
        alert("Error uploading file");
      }
    },
  });

  // Post data to server
  async function handleSubmit() {
    try {
      const formData = new FormData();
      formData.append(`dataBlocks`, JSON.stringify(dataBlocks));
    } catch (err) {
      console.error(err);
      alert("Error posting");
    }
  }

  return (
    <>
    {/* TODO: modal for uploading files, with input for description and level */}
      {/* Content */}
      <BlockNoteView
      theme={`light`}
      editor={editor}
      onChange={() => {
        setDataBlocks(editor.document);
        localStorage.setItem(`dataBlocks`, JSON.stringify(editor.document));
      }}
      />

      {/* Submit button */}
      <div className="w-full flex justify-center">
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          sx={{ margin: 2 }}
        >
          Posting
        </Button>
        <Link
          to={`../Material`}
        >
          <Button
            variant="outlined"
            color="error"
            sx={{ margin: 2 }}
            >
            Simpan dan Keluar
          </Button>
        </Link>
      </div>
    </>
  );
}
