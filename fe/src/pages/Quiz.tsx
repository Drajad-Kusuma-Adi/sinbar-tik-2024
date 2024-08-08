function QuizCard({ bgColor, img, title, level, totalQuestion, isAdmin }: { bgColor: string, img: string | null, title: string, level: number, totalQuestion: number, isAdmin: boolean }) {
    return (
        <div className={`flex-grow w-1/3 md:w-1/4 bg-[${bgColor}] p-4 rounded-xl text-center`}>
            <img src={img ? img : "https://via.placeholder.com/100"} alt={title} className='mx-auto' />
            <h1 className="text-2xl my-2 font-bold">{title}</h1>
            <p className='text-xl my-2'>Level {level}</p>
            <p>{totalQuestion} Soal</p>
            <button className='shadow-[#CDE1EC] shadow-lg p-4 w-full bg-white font-bold rounded-xl mt-6'>{isAdmin ? "Edit" : "Main"}</button>
        </div>
    )
}

export default function Quiz() {

    return (
        <>
            {/* Kuis */}
            <div className="flex flex-wrap gap-4">
                <div className="flex-grow w-1/3 md:w-1/4 bg-[#ECFBFF] p-4 rounded-xl text-center">
                    <img src="https://via.placeholder.com/100" alt="image" className='mx-auto'/>
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
        </>
    )
}