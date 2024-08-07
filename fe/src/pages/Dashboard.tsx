export default function Dashboard() {
    return (
        <>
            {/* Image */}
            <img src="Hero.svg" alt="hero" className='w-full' />
            {/* Tabel Peringkat */}
            <div className='rounded-xl border border-gray-300 mt-4 w-full'>
                <table className='w-full'>
                    <tr className='border-b border-gray-300'>
                        <th className="p-4 text-xl text-start" colSpan={3}>Daftar Peringkat Siswa</th>
                        <td className="p-4 float-right"><button onClick={() => { sessionStorage.setItem('page', 'peringkat'); location.reload() }} className='flex border border-[#196C88] rounded-md p-1 ps-8 pe-6 text-[#196C88]'>
                            Semua <img src="Right.svg" alt="arrow" className='inline-block ms-4' style={{marginTop: '2px'}} />
                        </button></td>
                    </tr>
                    <tr className='font-bold text-gray-500'>
                        <td className='p-4'>Nama Siswa</td>
                        <td className='p-4'>Peringkat</td>
                        <td className='p-4'>Perolehan XP</td>
                        <td className='p-4'>Level saat ini</td>
                    </tr>
                    {/* USERS */}
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
                </table>
            </div>
            {/* Kuis */}
            <h1 className='mt-4 font-bold text-lg'>Semua Kuis</h1>
            <hr className='border-[#196C88] w-[13%] sm:w-[11%] md:w-[12%] lg:w-[8.5%] xl:w-[7.5%]' />
            <div className="flex flex-wrap gap-4 mt-4">
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
            </div>
            {/* Pematerian */}
            <h1 className='mt-4 font-bold text-lg'>Pematerian</h1>
            <hr className='border-[#196C88] w-[13%] sm:w-[11%] md:w-[12%] lg:w-[8.5%] xl:w-[7.5%]' />
            <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex-grow w-1/3 mx-auto bg-white rounded-xl border">
                    <img className="w-full h-48 object-cover rounded-t-xl" src="imgPlaceholder.svg" alt="image" />
                    <div className="p-4">
                        <h2 className="text-lg font-bold mb-2">Dampak Sosial Informatika</h2>
                        <p className="text-gray-600">Perkembangan teknologi komputer berawal dari kemunculan mesin kalkulator yang ...</p>
                    </div>
                </div>
                <div className="flex-grow w-1/3 mx-auto bg-white rounded-xl border">
                    <img className="w-full h-48 object-cover rounded-t-xl" src="imgPlaceholder.svg" alt="image" />
                    <div className="p-4">
                        <h2 className="text-lg font-bold mb-2">Dampak Sosial Informatika</h2>
                        <p className="text-gray-600">Perkembangan teknologi komputer berawal dari kemunculan mesin kalkulator yang ...</p>
                    </div>
                </div>
            </div>
        </>
    )
}