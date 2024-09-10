import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, InputAdornment, Modal, TextField, Typography } from "@mui/material";
import React from "react";
import { api } from "../utils/api";

function createData(
  id: string,
  nama: string,
  xp: string
) {
  return {id, nama, xp};
}

// TODO: Use later
// function createData(data: UserData) {
//   return {
//     "name": data.username,
//     "xp": data.xp,
//   }
// }

const rows = [
  createData("1", "Username1", "175000XP"),
  createData("2", "Username2", "150000XP"),
  createData("3", "Username3", "130000XP"),
  createData("4", "Username4", "115000XP"),
  createData("5", "Username5", "105000XP"),
  createData("6", "Username6", "100000XP"),
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface RowData {
  id: string;
  nama: string;
  xp: string;
}

export default function ManageUser() {
  const [opencreate, setOpencreate] = React.useState(false);
  const handleOpencreate = () => setOpencreate(true);
  const handleClosecreate = () => setOpencreate(false);

  const [selectedRow, setSelectedRow] = React.useState<RowData | null>(null);

  const [openupdate, setOpenupdate] = React.useState(false);
  const handleOpenupdate = (id: string) => {
    const row = rows.find(row => row.id === id);
    setSelectedRow(row || null);
    setOpenupdate(true);
  }
  const handleCloseupdate = () => setOpenupdate(false);

  const [opendelete, setOpendelete] = React.useState(false);
  const handleOpendelete = (id: string) => {
    const row = rows.find(row => row.id === id);
    setSelectedRow(row || null);
    setOpendelete(true);
  };
  const handleClosedelete = () => setOpendelete(false);

  // const [openupdate, setOpenupdate] = React.useState<Array<boolean>>(
  //   Array(rows.length).fill(false)
  // );
  // const [opendelete, setOpendelete] = React.useState<Array<boolean>>(
  //   Array(rows.length).fill(false)
  // );

  // // Handlers to open/close modals
  // const handleOpenupdate = (index: number) => {
  //   const newOpenUpdate = [...openupdate];
  //   newOpenUpdate[index] = true;
  //   setOpenupdate(newOpenUpdate);
  // };
  // const handleCloseupdate = (index: number) => {
  //   const newOpenUpdate = [...openupdate];
  //   newOpenUpdate[index] = false;
  //   setOpenupdate(newOpenUpdate);
  // };
  // const handleOpendelete = (index: number) => {
  //   const newOpenDelete = [...opendelete];
  //   newOpenDelete[index] = true;
  //   setOpendelete(newOpenDelete);
  // };
  // const handleClosedelete = (index: number) => {
  //   const newOpenDelete = [...opendelete];
  //   newOpenDelete[index] = false;
  //   setOpendelete(newOpenDelete);
  // };

  async function handleCreate() {
    // // Send a request to the server
    // const res = await api.post("/user", { "username": username.value, "password": password.value });

    // // If the server responds with an error, throw an error
    // if (!res.status.toString().startsWith("2")) {
    //   throw new Error(
    //     res.data.message || "Terjadi kesalahan yang tidak diketahui.",
    //   );
    // }
  }
  async function handleUpdate() {
    // // Send a request to the server
    // const res = await api.put("/user", { "username": username.value, "password": password.value, "xp": xp.value, "is_admin": admin.value });

    // // If the server responds with an error, throw an error
    // if (!res.status.toString().startsWith("2")) {
    //   throw new Error(
    //     res.data.message || "Terjadi kesalahan yang tidak diketahui.",
    //   );
    // }
  }
  async function handleDelete() {
    // // Send a request to the server
    // const res = await api.delete(`/user/${id}`);

    // // If the server responds with an error, throw an error
    // if (!res.status.toString().startsWith("2")) {
    //   throw new Error(
    //     res.data.message || "Terjadi kesalahan yang tidak diketahui.",
    //   );
    // }
  }

  return (
    <>
      {/* Tabel Peringkat */}
      {/* Create modal */}
      <Modal
        open={opencreate}
        onClose={handleClosecreate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create New User
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Username<br />
            <input type="text" className="border border-black mt-1 mb-3 p-1 w-full" />
            Password<br />
            <input type="password" className="border border-black mt-1 mb-3 p-1 w-full" />
            <div className="flex justify-center mt-2">
              <button onClick={handleCreate} className={`bg-[#ECFDF5] rounded-md p-1 px-8 text-[#0BB77E] border border-[#0BB77E]`}>
                Create
              </button>
            </div>
          </Typography>
        </Box>
      </Modal>
      {/* Update modal */}
      <Modal
        open={openupdate}
        onClose={handleCloseupdate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update User
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Username<br />
            <input type="text" defaultValue={selectedRow?.nama || ''} className="border border-black mt-1 mb-3 p-1 w-full" />
            Password<br />
            <input type="password" className="border border-black mt-1 mb-3 p-1 w-full" />
            XP<br />
            <input type="number" defaultValue={selectedRow?.xp ? parseInt(selectedRow.xp) : ''} className="border border-black mt-1 mb-3 p-1 w-full" />
            Admin<br />
            <select className="border border-black mt-1 mb-3 p-1 w-full">
              <option value="False" selected>False</option>
              <option value="True">True</option>
            </select>
            <div className="flex justify-center mt-2">
              <button onClick={handleUpdate} className={`bg-[#FFFBEB] rounded-md p-1 px-8 text-[#F49F0D] border border-[#F49F0D]`}>
                Edit
              </button>
            </div>
          </Typography>
        </Box>
      </Modal>
      {/* Delete modal */}
      <Modal
        open={opendelete}
        onClose={handleClosedelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete User
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="flex flex-col items-center">
              <b>{selectedRow?.nama}</b>
              <span className="mb-2">Apakah anda yakin?</span>
              <div className="flex space-x-4 mt-2">
                <button onClick={handleClosedelete} className={`bg-[#FFFBEB] rounded-md p-1 px-8 text-[#F49F0D] border border-[#F49F0D]`}>
                  Cancel
                </button>
                <button onClick={handleDelete} className={`bg-[#FFF1F2] rounded-md p-1 px-8 text-[#E96B6B] border border-[#E96B6B]`}>
                  Delete
                </button>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
      <div className="flex-1 p-4 pt-0 w-full mt-14 md:mt-0 me-4">
        <div className="flex justify-end">
          <button onClick={handleOpencreate} className={`bg-[#ECFDF5] rounded-md p-1 px-8 text-[#0BB77E] border border-[#0BB77E]`}>
            Create
          </button>
        </div>
        <div className="border border-gray-300 mt-4 w-full">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow className="border-b border-gray-300">
                  <TableCell
                    className="p-4 text-xl text-start"
                    colSpan={2}
                  >
                    <TextField
                      fullWidth
                      name="search"
                      // label="Pencarian"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="opacity-50"
                              height="24px"
                              viewBox="0 -960 960 960"
                              width="24px"
                              fill="black"
                            >
                              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                            </svg>
                          </InputAdornment>
                        ),
                      }}
                      placeholder="Cari"
                      type="text"
                      variant="outlined"
                      autoComplete="new-password"
                      size="small"
                    />
                  </TableCell>
                  <TableCell className="p-4 float-right flex items-center h-[78px]">
                    1-50 dari 500 siswa
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow>
                  <TableCell>Nama Siswa</TableCell>
                  <TableCell align="right">XP</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{"&:last-child td, &:last-child th": {border: 0}}}
                  >
                    <TableCell component="th" scope="row">
                      <img
                        src="https://via.placeholder.com/50"
                        alt="profile"
                        className="rounded-full inline-block me-2"
                      />
                      {row.nama}
                    </TableCell>
                    <TableCell align="right" className="text-lg">
                      {row.xp}
                    </TableCell>
                    <TableCell align="right" className="text-lg">
                      <button
                        onClick={() => handleOpenupdate(row.id)} className={`bg-[#FFFBEB] rounded-md p-1 px-8 text-[#F49F0D] me-2 border border-[#F49F0D]`}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleOpendelete(row.id)} className={`bg-[#FFF1F2] rounded-md p-1 px-8 text-[#E96B6B] border border-[#E96B6B]`}
                      >
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => {}}
            className="flex border border-[#196C88] rounded-md p-1 ps-6 pe-8 text-[#196C88]"
          >
            <img
              src="LeftArr.svg"
              alt="arrow"
              className="inline-block me-4 mt-0"
            />{" "}
            Prev
          </button>
          <div className="flex flex-wrap gap-x-2">
            <button className="rounded-lg border border-[#196C88] px-3 p-1">
              1
            </button>
            <button className="rounded-lg px-3 p-1">2</button>
            <button className="rounded-lg px-3 p-1">3</button>
            <button className="rounded-lg px-3 p-1">4</button>
          </div>
          <button
            onClick={() => {}}
            className="flex border border-[#196C88] rounded-md p-1 ps-8 pe-6 bg-[#196C88] text-white"
          >
            Next{" "}
            <img
              src="RightArr.svg"
              alt="arrow"
              className="filter invert contrast-200 brightness-0 inline-block ms-4 mt-0"
            />
          </button>
        </div>
        <hr className="opacity-0 mt-4" />
      </div>
    </>
  );
}