import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Material from "./pages/Material";
import Quiz from "./pages/Quiz";
import Peringkat from "./pages/Peringkat";
import UserLayout from "./pages/UserLayout";

import Profile from "./pages/Profile";

export default function Router() {
    const page = sessionStorage.getItem('page') || 'dashboard';

    // Create page session if it doesn't exist
    useEffect(() => {
        if (!sessionStorage.getItem('page')) {
            sessionStorage.setItem('dashboard', page);
        }
    }, [page]);

    // TODO: Guard to check the validity of the user's session
    return (
        <>
            <UserLayout>
                {page === 'dashboard' && <Dashboard />}
                {page === 'material' && <Material />}
                {page === 'quiz' && <Quiz />}
                {page === 'peringkat' && <Peringkat />}
                {page === 'profile' && <Profile />}
            </UserLayout>
        </>
    )
}