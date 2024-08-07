export default function Peringkat() {
    return (
        <>
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
        </>
    )
}