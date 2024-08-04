import { useState } from 'react';

export default function Quiz() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    function handleLogout() {

        const apiUrl = 'http://localhost:3000/auth';
        const token = localStorage.getItem('userData');

        fetch(apiUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => response.json())
        .then(() => {
            localStorage.removeItem('userData');
            location.reload();
        })
        .catch((error) => console.error(error));
    }
    return (
        <>
            <div className="w-screen h-screen">
                <div className="w-screen h-screen bg-black fixed left-0 top-0 block md:hidden" style={{ opacity: sidebarOpen ? '0.25' : '0' }}></div>

                {/* Sidebar */}
                <div className="flex h-screen">
                    <div className={`z-5 h-screen fixed top-0 left-0 bg-white border-r-2 w-64 p-4 md:w-1/3 lg:w-1/4 xl:w-1/5 ${sidebarOpen? 'block' : 'hidden md:block'}`}>
                        
                        <img src="Logo-Horizontal.svg" alt="logo" className="mx-auto mb-24 mt-12 md:mt-0" />

                        {/* Menu */}
                        <div className="flex-1">
                            <p className="text-gray-500 mb-8">Menu Utama</p>
                            <ul>
                                <li className="mb-8">
                                    <button onClick={() => { sessionStorage.setItem('page', 'dashboard'); location.reload() }} className="text-gray-600 hover:text-gray-900 font-bold text-xl flex">
                                        <svg className="inline-block me-2 stroke-current fill-none" width="30" height="30" viewBox="0 0 30 26">
                                            <path d="M1 3.66667C1 2.95942 1.295 2.28115 1.8201 1.78105C2.3452 1.28095 3.05739 1 3.8 1H12.2V25H3.8C3.05739 25 2.3452 24.719 1.8201 24.219C1.295 23.7189 1 23.0406 1 22.3333V3.66667ZM17.8 1H26.2C26.9426 1 27.6548 1.28095 28.1799 1.78105C28.705 2.28115 29 2.95942 29 3.66667V10.3333H17.8V1ZM17.8 15.6667H29V22.3333C29 23.0406 28.705 23.7189 28.1799 24.219C27.6548 24.719 26.9426 25 26.2 25H17.8V15.6667Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        Beranda
                                    </button>
                                </li>
                                <li className="mb-8">
                                    <button onClick={() => { sessionStorage.setItem('page', 'material'); location.reload() }} className="text-gray-600 hover:text-gray-900 font-bold text-xl flex">
                                        <svg className="inline-block me-2 stroke-none fill-current" width="30" height="30" viewBox="0 0 21 24">
                                            <path d="M3.60937 24C2.625 24 1.77734 23.7123 1.06641 23.1368C0.355469 22.5613 0 21.8491 0 21V5.20755C0 4.49057 0.257031 3.84906 0.771094 3.28302C1.28516 2.71698 1.95781 2.35849 2.78906 2.20755L15.75 0V18.1132L3.31406 20.2642C3.11719 20.3019 2.95312 20.3915 2.82187 20.533C2.69062 20.6745 2.625 20.8302 2.625 21C2.625 21.2075 2.72344 21.3821 2.92031 21.5236C3.11719 21.6651 3.34687 21.7358 3.60937 21.7358H18.375V3.62264H21V24H3.60937ZM6.5625 17.4057L13.125 16.3019V2.77358L6.5625 3.87736V17.4057ZM3.9375 17.8585V4.33019L3.44531 4.41509C3.20469 4.45283 3.00781 4.54245 2.85469 4.68396C2.70156 4.82547 2.625 5 2.625 5.20755V18.1415C2.73438 18.1038 2.84922 18.0708 2.96953 18.0425C3.08984 18.0142 3.20469 17.9906 3.31406 17.9717L3.9375 17.8585Z" />
                                        </svg>
                                        Material
                                    </button>
                                </li>
                                <li className="mb-8">
                                    <button onClick={() => { sessionStorage.setItem('page', 'quiz'); location.reload() }} className="text-[#26758F] font-bold text-xl flex">
                                        <svg className="inline-block me-2 stroke-current fill-none" width="30" height="30" viewBox="0 0 21 22">
                                            <path d="M18 12V8.368C18 4.895 18 3.158 16.975 2.079C15.95 1 14.3 1 11 1H8C4.7 1 3.05 1 2.025 2.08C1 3.157 1 4.894 1 8.367V13.631C1 17.104 1 18.841 2.025 19.92C3.05 20.999 4.7 21 8 21H9.5M12 19C12 19 13 19 14 21C14 21 17.177 16 20 15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M5.5 1L5.582 1.493C5.782 2.69 5.882 3.289 6.302 3.645C6.72 4 7.327 4 8.541 4H10.458C11.671 4 12.278 4 12.698 3.645C13.118 3.289 13.218 2.69 13.417 1.493L13.5 1M5.5 15H9.5M5.5 10H13.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        Kuis
                                    </button>
                                </li>
                                <li className="mb-8">
                                    <button onClick={() => { sessionStorage.setItem('page', 'peringkat'); location.reload() }} className="text-gray-600 hover:text-gray-900 font-bold text-xl flex">
                                        <svg className="inline-block me-2 stroke-current fill-none" width="30" height="30" viewBox="0 0 26 26">
                                            <path d="M9.75032 23.8332V18.4166C9.75032 17.395 9.75032 16.8847 9.43291 16.5673C9.11549 16.2499 8.60524 16.2499 7.58366 16.2499H7.04199C5.50908 16.2499 4.74316 16.2499 4.26866 16.7266C3.79199 17.2021 3.79199 17.9681 3.79199 19.4999V23.8332H9.75032ZM9.75032 23.8332H16.2503M9.75032 23.8332V17.3332C9.75032 15.8014 9.75032 15.0355 10.227 14.5599C10.7015 14.0832 11.4674 14.0832 13.0003 14.0832C14.5332 14.0832 15.2981 14.0832 15.7737 14.5599C16.2503 15.0355 16.2503 15.8014 16.2503 17.3332V23.8332M16.2503 23.8332H22.2087V21.6666C22.2087 20.1347 22.2087 19.3688 21.732 18.8932C21.2564 18.4166 20.4905 18.4166 18.9587 18.4166H18.417C17.3954 18.4166 16.8852 18.4166 16.5677 18.734C16.2503 19.0514 16.2503 19.5616 16.2503 20.5832V23.8332ZM2.16699 23.8332H23.8337M13.7489 2.79272L14.5116 4.33106C14.5763 4.44632 14.6645 4.54668 14.7705 4.62563C14.8765 4.70458 14.9979 4.76034 15.1269 4.78931L16.5092 5.02006C17.3932 5.16847 17.6012 5.81522 16.9642 6.45331L15.8896 7.53664C15.7954 7.64329 15.7262 7.76967 15.6873 7.90651C15.6483 8.04336 15.6404 8.18719 15.6642 8.32747L15.9719 9.66864C16.2146 10.7303 15.6556 11.1409 14.7239 10.5862L13.4282 9.81272C13.2957 9.74397 13.1486 9.70808 12.9992 9.70808C12.8499 9.70808 12.7028 9.74397 12.5702 9.81272L11.2746 10.5862C10.3472 11.1409 9.78391 10.726 10.0266 9.66864L10.3342 8.32747C10.3581 8.18719 10.3502 8.04336 10.3112 7.90651C10.2722 7.76967 10.2031 7.64329 10.1089 7.53664L9.03533 6.45331C8.40266 5.81522 8.60633 5.16847 9.49033 5.02006L10.8716 4.78931C10.9999 4.75967 11.1205 4.70348 11.2257 4.62436C11.331 4.54525 11.4185 4.44497 11.4826 4.32997L12.2452 2.79164C12.6612 1.95747 13.3372 1.95747 13.7489 2.79164" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        Peringkat
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="fixed bottom-0 left-0 p-4 bg-white">
                            <button className="text-[#B43535] font-semibold" onClick={handleLogout}>
                                <img src="Logout.svg" alt="logout" className="inline-block me-2" />
                                Log Out
                            </button>
                        </div>
                    </div>

                    {/* Toggle button for sidebar */}
                    <button className="md:hidden fixed top-0 p-4 bg-white border-b-2 border-r-2 rounded-br z-10" onClick={() => setSidebarOpen(!sidebarOpen)}>
                        {sidebarOpen? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                    
                    {/* Main Content */}
                    <div className="md:w-1/3 lg:w-1/4 xl:w-1/5"></div>
                    <div className="flex-1 p-4 w-full mt-14 md:mt-0 me-4">
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
                        {/* Kuis */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex-grow w-1/3 md:w-1/4 bg-[#ECFBFF] p-4 rounded-xl text-center">
                                <img src="https://via.placeholder.com/100" alt="image" className='mx-auto' />
                                <p className='text-xl my-2'>Level 1</p>
                                <p>30 Soal</p>
                                <button className='shadow-[#CDE1EC] shadow-lg p-4 w-full bg-white font-bold rounded-xl mt-6'>Main</button>
                            </div>
                            <div className="flex-grow w-1/3 md:w-1/4 bg-[#EEF2FE] p-4 rounded-xl text-center">
                                <img src="https://via.placeholder.com/100" alt="image" className='mx-auto' />
                                <p className='text-xl my-2'>Level 2</p>
                                <p>30 Soal</p>
                                <button className='shadow-[#CFD6E8] shadow-lg p-4 w-full bg-white font-bold rounded-xl mt-6'>Main</button>
                            </div>
                            <div className="flex-grow w-1/3 md:w-1/4 bg-[#FCF8EF] p-4 rounded-xl text-center">
                                <img src="https://via.placeholder.com/100" alt="image" className='mx-auto' />
                                <p className='text-xl my-2'>Level 3</p>
                                <p>30 Soal</p>
                                <button className='shadow-[#F7E0AD] shadow-lg p-4 w-full bg-white font-bold rounded-xl mt-6'>Main</button>
                            </div>
                            <div className="flex-grow w-1/3 md:w-1/4 bg-[#ECFBFF] p-4 rounded-xl text-center">
                                <img src="https://via.placeholder.com/100" alt="image" className='mx-auto' />
                                <p className='text-xl my-2'>Level 4</p>
                                <p>30 Soal</p>
                                <button className='shadow-[#CDE1EC] shadow-lg p-4 w-full bg-white font-bold rounded-xl mt-6'>Main</button>
                            </div>
                            <div className="flex-grow w-1/3 md:w-1/4 bg-[#EEF2FE] p-4 rounded-xl text-center">
                                <img src="https://via.placeholder.com/100" alt="image" className='mx-auto' />
                                <p className='text-xl my-2'>Level 5</p>
                                <p>30 Soal</p>
                                <button className='shadow-[#CFD6E8] shadow-lg p-4 w-full bg-white font-bold rounded-xl mt-6'>Main</button>
                            </div>
                            <div className="flex-grow w-1/3 md:w-1/4 bg-[#FCF8EF] p-4 rounded-xl text-center">
                                <img src="https://via.placeholder.com/100" alt="image" className='mx-auto' />
                                <p className='text-xl my-2'>Level 6</p>
                                <p>30 Soal</p>
                                <button className='shadow-[#F7E0AD] shadow-lg p-4 w-full bg-white font-bold rounded-xl mt-6'>Main</button>
                            </div>
                        </div>
                        <hr className='opacity-0 mt-4' />
                    </div>
                </div>
            </div>
        </>
    )
}