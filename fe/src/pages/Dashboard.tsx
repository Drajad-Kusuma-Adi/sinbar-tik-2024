import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

const rows = [
  createData("Username", 1, "100000XP", "Level 1", "#ECFDF5", "#0BB77E"),
  createData("Username", 2, "100000XP", "Level 2", "#ECFDF5", "#0BB77E"),
  createData("Username", 3, "100000XP", "Level 3", "#ECFDF5", "#0BB77E"),
];

export default function Dashboard() {
  return (
    <>
      {/* Image */}
      <img src="Hero.svg" alt="hero" className="w-full" />
      {/* Tabel Peringkat */}
      <div className="border border-gray-300 mt-4 w-full">
        <TableContainer component={Paper}>
          <Table sx={{minWidth: 650}} aria-label="simple table">
            <TableHead>
              <TableRow className="border-b border-gray-300">
                <TableCell className="p-4 text-xl text-start" colSpan={3}>
                  Daftar Peringkat Siswa
                </TableCell>
                <TableCell className="p-4 float-right">
                  <button
                    onClick={() => {
                      sessionStorage.setItem("page", "peringkat");
                      location.reload();
                    }}
                    className="flex border border-[#196C88] rounded-md p-1 ps-8 pe-6 text-[#196C88]"
                  >
                    <div className="flex justify-center items-center">
                      <div>Semua</div>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.70697 16.9496L15.414 11.2426L9.70697 5.53564L8.29297 6.94964L12.586 11.2426L8.29297 15.5356L9.70697 16.9496Z"
                          fill="#196C88"
                        />
                      </svg>
                    </div>
                  </button>
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
                    <button className={`bg-[${row.color}] rounded-md p-1 px-8 text-[${row.txtcolor}]`}>
                      {row.level}
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <table className="w-full">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="p-4 text-xl text-start" colSpan={3}>
                Daftar Peringkat Siswa
              </th>
              <td className="p-4 float-right">
                <button
                  onClick={() => {
                    sessionStorage.setItem("page", "peringkat");
                    location.reload();
                  }}
                  className="flex border border-[#196C88] rounded-md p-1 ps-8 pe-6 text-[#196C88]"
                >
                  <div className="flex justify-center items-center">
                    <div>Semua</div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.70697 16.9496L15.414 11.2426L9.70697 5.53564L8.29297 6.94964L12.586 11.2426L8.29297 15.5356L9.70697 16.9496Z"
                        fill="#196C88"
                      />
                    </svg>
                  </div>
                </button>
              </td>
            </tr>
          </thead>
          <thead>
            <tr className="font-bold text-gray-500">
              <td className="p-4">Nama Siswa</td>
              <td className="p-4">Peringkat</td>
              <td className="p-4">Perolehan XP</td>
              <td className="p-4">Level saat ini</td>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-300">
              <td className="p-4 text-gray-900">
                <img
                  src="https://via.placeholder.com/50"
                  alt="profile"
                  className="rounded-full inline-block me-2"
                />
                Username
              </td>
              <td className="p-4 text-lg">1</td>
              <td className="p-4 text-lg">100000XP</td>
              <td className="p-4">
                <button className="bg-[#ECFDF5] rounded-md p-1 px-8 text-[#0BB77E]">
                  Level 1
                </button>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="p-4 text-gray-900">
                <img
                  src="https://via.placeholder.com/50"
                  alt="profile"
                  className="rounded-full inline-block me-2"
                />
                Username
              </td>
              <td className="p-4 text-lg">2</td>
              <td className="p-4 text-lg">100000XP</td>
              <td className="p-4">
                <button className="bg-[#ECFDF5] rounded-md p-1 px-8 text-[#0BB77E]">
                  Level 2
                </button>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="p-4 text-gray-900">
                <img
                  src="https://via.placeholder.com/50"
                  alt="profile"
                  className="rounded-full inline-block me-2"
                />
                Username
              </td>
              <td className="p-4 text-lg">3</td>
              <td className="p-4 text-lg">100000XP</td>
              <td className="p-4">
                <button className="bg-[#ECFDF5] rounded-md p-1 px-8 text-[#0BB77E]">
                  Level 3
                </button>
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
      {/* Kuis */}
      <h1 className="mt-4 font-bold text-lg">Semua Kuis</h1>
      <hr className="border-[#196C88] w-[13%] sm:w-[11%] md:w-[12%] lg:w-[8.5%] xl:w-[7.5%]" />
      <div className="flex flex-wrap gap-4 mt-4">
        <div className="flex-grow w-1/3 md:w-1/4 bg-[#ECFBFF] p-4 rounded-xl text-center">
          <img
            src="https://via.placeholder.com/100"
            alt="image"
            className="mx-auto"
          />
          <p className="text-xl my-2">Level 1</p>
          <p>30 Soal</p>
          <button className="shadow-[#CDE1EC] shadow-lg p-4 w-full bg-white font-bold rounded-xl mt-6">
            Main
          </button>
        </div>
        <div className="flex-grow w-1/3 md:w-1/4 bg-[#EEF2FE] p-4 rounded-xl text-center">
          <img
            src="https://via.placeholder.com/100"
            alt="image"
            className="mx-auto"
          />
          <p className="text-xl my-2">Level 2</p>
          <p>30 Soal</p>
          <button className="shadow-[#CFD6E8] shadow-lg p-4 w-full bg-white font-bold rounded-xl mt-6">
            Main
          </button>
        </div>
        <div className="flex-grow w-1/3 md:w-1/4 bg-[#FCF8EF] p-4 rounded-xl text-center">
          <img
            src="https://via.placeholder.com/100"
            alt="image"
            className="mx-auto"
          />
          <p className="text-xl my-2">Level 3</p>
          <p>30 Soal</p>
          <button className="shadow-[#F7E0AD] shadow-lg p-4 w-full bg-white font-bold rounded-xl mt-6">
            Main
          </button>
        </div>
      </div>
      {/* Pematerian */}
      <h1 className="mt-4 font-bold text-lg">Pematerian</h1>
      <hr className="border-[#196C88] w-[13%] sm:w-[11%] md:w-[12%] lg:w-[8.5%] xl:w-[7.5%]" />
      <div className="flex flex-wrap gap-4 mt-4">
        <div className="flex-grow w-1/3 mx-auto bg-white rounded-xl border">
          <img
            className="w-full h-48 object-cover rounded-t-xl"
            src="imgPlaceholder.svg"
            alt="image"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">
              Dampak Sosial Informatika
            </h2>
            <p className="text-gray-600">
              Perkembangan teknologi komputer berawal dari kemunculan mesin
              kalkulator yang ...
            </p>
          </div>
        </div>
        <div className="flex-grow w-1/3 mx-auto bg-white rounded-xl border">
          <img
            className="w-full h-48 object-cover rounded-t-xl"
            src="imgPlaceholder.svg"
            alt="image"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">
              Dampak Sosial Informatika
            </h2>
            <p className="text-gray-600">
              Perkembangan teknologi komputer berawal dari kemunculan mesin
              kalkulator yang ...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
