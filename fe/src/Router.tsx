import { useEffect } from "react";
import Dashboard from "./Dashboard";

export default function Router() {
    const page = sessionStorage.getItem('page') || 'dashboard';

    // Create page session if it doesn't exist
    useEffect(() => {
        if (!sessionStorage.getItem('page')) {
        sessionStorage.setItem('page', page);
        }
    }, []);
    return (
        <>
            {page === 'dashboard' && <Dashboard />}
        </>
    )
}