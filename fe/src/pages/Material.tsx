function MaterialCard({ img, title, description }: { img: string | null, title: string, description: string }) {
    return (
        <div className="flex-grow w-1/3 mx-auto bg-white rounded-xl border">
            <img className="w-full h-48 object-cover rounded-t-xl" src={img ? img : "imgPlaceholder.svg"} alt={title}/>
            <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    )
}

export default function Material() {
    return (
        <>
            {/* Materi */}
            <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex-grow w-1/3 mx-auto bg-white rounded-xl border">
                    <img className="w-full h-48 object-cover rounded-t-xl" src="imgPlaceholder.svg" alt="image"/>
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