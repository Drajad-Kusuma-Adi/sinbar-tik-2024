export default function Profile() {
    return (
        <>
            {/* Profile */}
            <div className="flex flex-nowrap">
                <img src="https://via.placeholder.com/50" alt="profile" className="rounded-full inline-block w-[2cm] h-[2cm]" />
                <div className="ms-4 h-[2cm] w-fit flex flex-col justify-center items-start text-start">
                    <b>{JSON.parse(localStorage.getItem('userData') || "").username}</b>
                    <a className="text-[#65B8C3] block">Whatever here, not gmail tho</a>
                </div>
            </div>
            {/* Statistik */}
            <h1 className='mt-4 font-bold text-lg'>Statistik</h1>
            <hr className='border-[#196C88] w-[13%] sm:w-[11%] md:w-[12%] lg:w-[8.5%] xl:w-[7.5%]' />
            <div className="flex mt-4">
                <div className="w-1/2 mx-auto bg-white rounded-xl border me-4 p-4">
                    {/* idk, the design aint tellin me */}
                </div>
                <div className="w-1/2 mx-auto bg-white rounded-xl border me-4 p-4">
                    {/* idk, the design aint tellin me */}
                </div>
            </div>
            {/* Riwayat */}
            <h1 className='mt-4 font-bold text-lg'>Riwayat</h1>{/* new feature? aight designer */}
            <hr className='border-[#196C88] w-[13%] sm:w-[11%] md:w-[12%] lg:w-[8.5%] xl:w-[7.5%]' />
            <div className="flex mt-4">
                <div className="w-1/2 mx-auto bg-white rounded-xl border me-4 p-4">
                    {/* idk, the design aint tellin me */}
                </div>
                <div className="w-1/2 mx-auto bg-white rounded-xl border me-4 p-4">
                    {/* idk, the design aint tellin me */}
                </div>
            </div>
        </>
    )
}