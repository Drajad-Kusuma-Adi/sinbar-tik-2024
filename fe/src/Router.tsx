import { Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Material from "./pages/Material";
import Quiz from "./pages/Quiz";
import Peringkat from "./pages/Peringkat";
import ManageUser from "./pages/ManageUser";
import UserLayout from "./pages/UserLayout";

import Profile from "./pages/Profile";
import { api } from "./utils/api";
import { AxiosError } from "axios";
import { UserData } from "./utils/types/UserData";
import Auth from "./pages/Auth";

export default function Router() {
  const [auth, setAuth] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  async function verifyAuth(userData: UserData) {
    try {
      // Verify user token on the server
      await api.get(`/auth`, {
        headers: { Authorization: `Bearer ${userData.remember_token}` },
      });

      setAuth(true);
      setIsLogin(true);

      return;
    } catch (err) {
      alert(
        err instanceof AxiosError
          ? err.response?.data.message
          : (err as Error).message,
      );

      // Clean up local storage and reload the page
      localStorage.clear();
      sessionStorage.clear();
      window.location.pathname = "/";
      location.reload();

      return;
    }
  }

  // Guard to check the validity of the user's session
  useEffect(() => {
    // Check if user is logged in
    const userDataStr = localStorage.getItem("userData");
    if (!userDataStr) {
      setAuth(true);
      return;
    }

    // Check if userData is valid UserData
    const userData: UserData = JSON.parse(userDataStr);

    // Verify user token on the server
    verifyAuth(userData);
  }, []);

  return auth ? (
    <>
      {isLogin ? (
        <UserLayout>
          <Routes>
            <Route path="/" Component={Dashboard} />
            <Route path="/beranda" Component={Dashboard} />

            <Route path="/material" Component={Material} />

            <Route path="/quiz" Component={Quiz} />
            <Route path="/peringkat" Component={Peringkat} />
            <Route path="/profile" Component={Profile} />
            <Route path="/manageuser" Component={ManageUser} />
          </Routes>
          {/* {page === 'Beranda' && <Dashboard />}
                    {page === 'Material' && <Material />}
                    {page === 'Quiz' && <Quiz />}
                    {page === 'Peringkat' && <Peringkat />}
                    {page === 'Profile' && <Profile />} */}
        </UserLayout>
      ) : (
        <Auth />
      )}
    </>
  ) : (
    <div className="w-screen h-screen flex items-center justify-center">
      Loading...
    </div>
  );
}
