import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { InputAdornment, TextField } from "@mui/material";

function createData(
  nama: string,
  peringkat: number,
  xp: string,
  level: string,
  color: string,
  txtcolor: string
) {
  return {nama, peringkat, xp, level, color, txtcolor};
}

// TODO: Use later
// function createData(data: UserData) {
//   return {
//     "name": data.username,
//     "xp": data.xp,
//   }
// }

const rows = [
  createData("Username", 1, "100000XP", "Level 1", "#ECFDF5", "#0BB77E"),
  createData("Username", 2, "100000XP", "Level 2", "#ECFDF5", "#0BB77E"),
  createData("Username", 3, "100000XP", "Level 3", "#ECFDF5", "#0BB77E"),
  createData("Username", 4, "100000XP", "Level 1", "#FFFBEB", "#F49F0D"),
  createData("Username", 5, "100000XP", "Level 1", "#FFFBEB", "#F49F0D"),
  createData("Username", 6, "100000XP", "Level 1", "#FFF1F2", "#E96B6B"),
];

export default function Peringkat() {
  return (
    <>
      {/* Tabel Peringkat */}
      <div className="flex-1 p-4 w-full mt-14 md:mt-0 me-4">
        <h1 className="font-bold text-lg">Berikut adalah peringkat siswa</h1>
        <p className="opacity-50">Kembangkan potensimu</p>
        <div className="border border-gray-300 mt-4 w-full">
          <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
              <TableHead>
                <TableRow className="border-b border-gray-300">
                  <TableCell
                    className="p-4 text-xl text-start"
                    colSpan={3}
                  >
                    {/* <div className="flex w-2/3 border p-2 rounded-lg">
                      <img
                        src="Search.svg"
                        alt="search"
                        className="ms-2 me-4 w-[24px]"
                      />
                      <input
                        type="text"
                        className="flex-1 border-0 bg-transparent text-lg"
                        placeholder="Search"
                      />
                    </div> */}
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
                  <TableCell align="right">Peringkat</TableCell>
                  <TableCell align="right">Perolehan XP</TableCell>
                  <TableCell align="right">Level saat ini</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.nama}
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
                      {row.peringkat}
                    </TableCell>
                    <TableCell align="right" className="text-lg">
                      {row.xp}
                    </TableCell>
                    <TableCell align="right">
                      <button
                        className={`bg-[${row.color}] rounded-md p-1 px-8 text-[${row.txtcolor}]`}
                      >
                        {row.level}
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <div className="flex-1 p-4 w-full mt-14 md:mt-0 me-4">
            <h1 className='font-bold text-lg'>Berikut adalah peringkat siswa</h1>
            <p className='opacity-50'>Kembangkan potensimu</p>
            <div className='rounded-t-xl border border-gray-300 mt-4 w-full'>
                <table className='w-full'>
                    <tr className='border-b border-gray-300'>
                        <td className="p-4 text-xl text-start" colSpan={3}>
                            <div className="flex w-2/3 border p-2 rounded-lg">
                                <img src="Search.svg" alt="search" className='ms-2 me-4 w-[24px]' />
                                <input type="text" className="flex-1 border-0 bg-transparent text-lg" placeholder="Search" />
                            </div>
                        </td>
                        <td className="p-4 float-right flex items-center h-[78px]">Showing 1-50 of 500</td>
                    </tr>
                    <tr className='font-bold text-gray-500'>
                        <td className='p-4'>Nama Siswa</td>
                        <td className='p-4'>Peringkat</td>
                        <td className='p-4'>Perolehan XP</td>
                        <td className='p-4'>Level saat ini</td>
                    </tr>
                    <tr className="border-t border-gray-300">
                        <td className='p-4 text-gray-900'>
                            <img src="https://via.placeholder.com/50" alt="profile" className='rounded-full inline-block me-2' />
                            Username
                        </td>
                        <td className='p-4 text-lg'>
                            1
                        </td>
                        <td className='p-4 text-lg'>
                            100000XP
                        </td>
                        <td className='p-4'>
                            <button className='bg-[#ECFDF5] rounded-md p-1 px-8 text-[#0BB77E]'>Level 1</button>
                        </td>
                    </tr>
                    <tr className="border-t border-gray-300">
                        <td className='p-4 text-gray-900'>
                            <img src="https://via.placeholder.com/50" alt="profile" className='rounded-full inline-block me-2' />
                            Username
                        </td>
                        <td className='p-4 text-lg'>
                            2
                        </td>
                        <td className='p-4 text-lg'>
                            100000XP
                        </td>
                        <td className='p-4'>
                            <button className='bg-[#ECFDF5] rounded-md p-1 px-8 text-[#0BB77E]'>Level 2</button>
                        </td>
                    </tr>
                    <tr className='border-t border-gray-300'>
                        <td className='p-4 text-gray-900'>
                            <img src="https://via.placeholder.com/50" alt="profile" className='rounded-full inline-block me-2' />
                            Username
                        </td>
                        <td className='p-4 text-lg'>
                            3
                        </td>
                        <td className='p-4 text-lg'>
                            100000XP
                        </td>
                        <td className='p-4'>
                            <button className='bg-[#ECFDF5] rounded-md p-1 px-8 text-[#0BB77E]'>Level 3</button>
                        </td>
                    </tr>
                    <tr className='border-t border-gray-300'>
                        <td className='p-4 text-gray-900'>
                            <img src="https://via.placeholder.com/50" alt="profile" className='rounded-full inline-block me-2' />
                            Username
                        </td>
                        <td className='p-4 text-lg'>
                            4
                        </td>
                        <td className='p-4 text-lg'>
                            100000XP
                        </td>
                        <td className='p-4'>
                            <button className='bg-[#FFFBEB] rounded-md p-1 px-8 text-[#F49F0D]'>Level 1</button>
                        </td>
                    </tr>
                    <tr className='border-t border-gray-300'>
                        <td className='p-4 text-gray-900'>
                            <img src="https://via.placeholder.com/50" alt="profile" className='rounded-full inline-block me-2' />
                            Username
                        </td>
                        <td className='p-4 text-lg'>
                            5
                        </td>
                        <td className='p-4 text-lg'>
                            100000XP
                        </td>
                        <td className='p-4'>
                            <button className='bg-[#FFFBEB] rounded-md p-1 px-8 text-[#F49F0D]'>Level 1</button>
                        </td>
                    </tr>
                    <tr className='border-t border-gray-300'>
                        <td className='p-4 text-gray-900'>
                            <img src="https://via.placeholder.com/50" alt="profile" className='rounded-full inline-block me-2' />
                            Username
                        </td>
                        <td className='p-4 text-lg'>
                            6
                        </td>
                        <td className='p-4 text-lg'>
                            100000XP
                        </td>
                        <td className='p-4'>
                            <button className='bg-[#FFF1F2] rounded-md p-1 px-8 text-[#E96B6B]'>Level 1</button>
                        </td>
                    </tr>
                </table>
            </div>
            <div className='mt-4 flex justify-between'>
                <button onClick={() => {}} className='flex border border-[#196C88] rounded-md p-1 ps-6 pe-8 text-[#196C88]'>
                    <img src="Right.svg" alt="arrow" className='transform scale-x-[-1] inline-block me-4 mt-[2px]' /> Prev
                </button>
                <div className='flex flex-wrap gap-x-2'>
                    <button className='rounded-lg border border-[#196C88] px-3 p-1'>1</button>
                    <button className='rounded-lg px-3 p-1'>2</button>
                    <button className='rounded-lg px-3 p-1'>3</button>
                    <button className='rounded-lg px-3 p-1'>4</button>
                </div>
                <button onClick={() => {}} className='flex border border-[#196C88] rounded-md p-1 ps-8 pe-6 bg-[#196C88] text-white'>
                    Next <img src="Right.svg" alt="arrow" className='filter invert contrast-200 brightness-0 inline-block ms-4 mt-[2px]' />
                </button>
            </div>
            <hr className='opacity-0 mt-4' />
          </div> */}
        </div>
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => {}}
            className="flex border border-[#196C88] rounded-md p-1 ps-6 pe-8 text-[#196C88]"
          >
            <img
              src="LeftArr.svg"
              alt="arrow"
              className="transform scale-x-[-1] inline-block me-4 mt-[2px]"
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
              className="filter invert contrast-200 brightness-0 inline-block ms-4 mt-[2px]"
            />
          </button>
        </div>
        <hr className="opacity-0 mt-4" />
      </div>
    </>
  );
}
