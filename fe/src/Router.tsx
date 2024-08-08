import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Material from "./pages/Material";
import Quiz from "./pages/Quiz";
import Peringkat from "./pages/Peringkat";
import UserLayout from "./pages/UserLayout";

import Profile from "./pages/Profile";

export default function Router() {
    const page = sessionStorage.getItem('page') || 'Beranda';

    // Create page session if it doesn't exist
    useEffect(() => {
        if (!sessionStorage.getItem('page')) {
            sessionStorage.setItem('page', page);
        }
    }, [page]);

    // TODO: Guard to check the validity of the user's session
    return (
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