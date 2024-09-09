import { ReactNode, useEffect, useState } from "react";
import { Sidebar } from "react-pro-sidebar";
import { UserData } from "../utils/types/UserData";
import { api } from "../utils/api";
import Swipe from "react-easy-swipe";
import { AxiosError } from "axios";
import { Link } from "react-router-dom";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";

export default function UserLayout({ children }: { children: ReactNode }) {
  const [toggled, setToggled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  async function handleLogout() {
    try {
      // Get user data and make sure it exists
      const userData = JSON.parse(
        localStorage.getItem("userData") as string,
      ) as UserData;
      if (!userData) throw new Error("Tidak ada data user.");

      // Logout user on the server
      await api.delete(`/auth`, {
        headers: { Authorization: `Bearer ${userData.remember_token}` },
      });

      // Clean up local storage and reload the page
      localStorage.clear();
      sessionStorage.clear();
      location.reload();
    } catch (err) {
      alert(
        err instanceof AxiosError
          ? err.response?.data.message
          : (err as Error).message,
      );
      localStorage.clear();
      location.reload();
    }
  }

  return (
    <div className="flex w-screen h-screen">
      {/* Main sidebar */}
      <Sidebar
        className="h-full shadow-lg"
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        breakPoint="md"
        backgroundColor="#FCFCFF"
      >
        <div className="flex flex-col justify-between p-8 h-full">
          <img src="Logo-Horizontal.svg" alt="logo" className="w-36" />

          <div className="text-gray-600">
            <Button disabled>Menu Utama</Button>
            <ul className="mt-2 w-full">
              {["Beranda", "Material", "Quiz", "Peringkat"].map((val, i) => (
                <li key={i} className="mb-4 w-full">
                  <Link
                    to={`/${val}`}
                  >
                    <Button color="inherit" fullWidth sx={{ justifyContent: `flex-start` }}>
                      <img
                        src={`${val}.svg`}
                        alt={val}
                        className="inline-block me-2 size-6"
                      />
                      {val}
                    </Button>
                  </Link>
                </li>
              ))}
              {JSON.parse(localStorage.getItem("userData") || "").is_admin && (
                <li className="mb-4 w-full">
                  <Link
                    to={`/manageuser`}
                  >
                    <Button color="inherit" fullWidth sx={{ justifyContent: `flex-start` }}>
                      <img
                        src={`ManageUser.svg`}
                        alt="ManageUser"
                        className="inline-block me-2 size-6"
                      />
                      Manage User
                    </Button>
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <Button color="error" sx={{ justifyContent: `flex-start` }} onClick={handleLogout}
          >
            <img
              src="Logout.svg"
              alt="logout"
              className="inline-block size-6 me-2"
            />
            Log Out
          </Button>
        </div>
      </Sidebar>

      {/* Main content */}
      <main className="self-start p-4 w-full h-full overflow-y-scroll">
        <Swipe tolerance={100} onSwipeRight={() => setToggled(!toggled)}>
          {/* Search & Notification & Profile */}
          <div className="flex justify-between items-center w-full mb-4">
            <div className="flex items-center space-x-2 w-full">
              {window.innerWidth < 768 && (
                <IconButton onClick={() => setToggled(!toggled)} sx={{ width: 48, height: 48 }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                </IconButton>
              )}
            <TextField
              fullWidth
              margin="normal"
              name="search"
              label="Pencarian"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="opacity-50" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                  </InputAdornment>
                ),
              }}
              placeholder="Cari judul materi atau quiz..."
              type="text"
              variant="outlined"
              autoComplete="new-password"
              size="small"
              />
              </div>
            <div className="items-center ms-4 space-x-2 flex">
              <IconButton sx={{ width: 48, height: 48 }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path></svg>
              </IconButton>
              <Link
                to={`/profile`}
              >
                <IconButton sx={{ width: 48, height: 48 }}>
                  <img src={`https://api.dicebear.com/9.x/bottts/svg?seed=${Math.random().toString(36).substring(2, 15)}`} alt="Profile" className="rounded-full" />
                </IconButton>
              </Link>
            </div>
          </div>

          {/* Page content */}
          {children}
        </Swipe>
      </main>
    </div>
  );
}
