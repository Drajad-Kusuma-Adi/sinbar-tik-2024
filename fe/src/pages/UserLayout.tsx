import { ReactNode, useState } from 'react';
import { Sidebar } from 'react-pro-sidebar';
import { UserData } from '../utils/types/UserData';
import { api } from '../utils/api';
import Swipe from 'react-easy-swipe';

export default function UserLayout({ children }: { children: ReactNode }) {
    const [toggled, setToggled] = useState(false);

    async function handleLogout() {
        try {
            // Get user data
            const userData = JSON.parse(localStorage.getItem('userData') as string) as UserData;
            if (!userData) throw new Error('Tidak ada data user.');

            // Logout user on the server
            const res = await api.delete(`/auth`, { headers: { Authorization: `Bearer ${userData.remember_token}` } });

            // If the server responds with an error, throw an error
            if (!res.status.toString().startsWith('2')) throw new Error(res.data.message || "Terjadi kesalahan yang tidak diketahui.");

            // Clean up local storage and reload the page
            localStorage.clear();
            sessionStorage.clear();
            location.reload();
        } catch (error) {
            alert(error instanceof Error ? error.message : 'Terjadi kesalahan yang tidak diketahui.');
        }
    }

    return (
        <div className='flex w-screen h-screen'>
            {/* Main sidebar */}
            <Sidebar
                className='h-full'
                toggled={toggled}
                onBackdropClick={() => setToggled(false)}
                breakPoint="md"
                backgroundColor='#ffffff'
            >
                <div className='flex flex-col justify-between p-8 h-full'>

                    <img src="Logo-Horizontal.svg" alt="logo" className="w-36" />

                    <div className="">
                        <p className="text-gray-500 mb-8">Menu Utama</p>
                        <ul>
                            {["Beranda", "Material", "Quiz", "Peringkat"].map((val, i) => (
                                <li key={i} className="mb-8">
                                    <button
                                        onClick={() => {
                                            sessionStorage.setItem('page', val);
                                            location.reload();
                                        }}
                                        className="text-gray-600 hover:text-gray-900 font-bold text-xl flex items-center"
                                    >
                                        <img src={`${val}.svg`} alt={val} className="inline-block me-2 size-6"/>
                                        {val}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className="text-[#B43535] self-start font-semibold" onClick={handleLogout}>
                        <img src="Logout.svg" alt="logout" className="inline-block size-6 me-2"/>
                        Log Out
                    </button>
                </div>
            </Sidebar>

            {/* Main content */}
            <main className="self-start p-4 w-full h-full overflow-y-scroll">
                <Swipe tolerance={100} onSwipeRight={() => setToggled(!toggled)}>
                    {/* Search & Notification & Profile */}
                    <div className="flex mb-4">
                        <div className="flex w-2/3 bg-gray-200 p-4 rounded-lg">
                            <img src="Search.svg" alt="search" className='me-4' />
                            <input type="text" className="flex-1 border-0 bg-transparent text-lg" placeholder="Pencarian" />
                        </div>
                        <div className="w-1/3 items-center flex justify-end">
                            <img src="Notification.svg" alt="notification" width="30" />
                            <img src="https://via.placeholder.com/50" alt="profile" onClick={() => { sessionStorage.setItem('page', 'profile'); location.reload() }} className='hover:cursor-pointer ms-4 md:ms-8 lg:ms-12 xl:ms-16 rounded-full h-full' />
                        </div>
                    </div>

                    {/* Page content */}
                    {children}
                </Swipe>
            </main>
        </div>
    );
}