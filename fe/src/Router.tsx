import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Material from "./pages/Material";
import Quiz from "./pages/Quiz";
import Peringkat from "./pages/Peringkat";
import UserLayout from "./pages/UserLayout";

import Profile from "./pages/Profile";
import { api } from "./utils/api";
import { AxiosError } from "axios";
import { UserData } from "./utils/types/UserData";

export default function Router() {
    const page = sessionStorage.getItem('page') || 'Beranda';
    const [auth, setAuth] = useState<boolean>(false);
    async function verifyAuth() {
        try {
            // Get user data and make sure it exists
            const userData = JSON.parse(localStorage.getItem('userData') as string) as UserData;
            if (!userData) throw new Error('Tidak ada data user.');

            // Verify user token on the server
            await api.get(`/auth`, { headers: { Authorization: `Bearer ${userData.remember_token}` } });

            setAuth(true)
        } catch (err) {
            alert(err instanceof AxiosError ? err.response?.data.message : (err as Error).message);

            // Clean up local storage and reload the page
            localStorage.clear();
            sessionStorage.clear();
            location.reload();
        }
    }

    // Create page session if it doesn't exist
    useEffect(() => {
        if (!sessionStorage.getItem('page')) {
            sessionStorage.setItem('page', page);
        }
    }, [page]);

    // Guard to check the validity of the user's session
    useEffect(() => {
        verifyAuth();
    }, []);

    return auth && (
        <>
            <UserLayout>
                {page === 'Beranda' && <Dashboard />}
                {page === 'Material' && <Material />}
                {page === 'Quiz' && <Quiz />}
                {page === 'Peringkat' && <Peringkat />}
                {page === 'Profile' && <Profile />}
            </UserLayout>
        </>
    )
}