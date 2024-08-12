// function MaterialCard({ img, title, description }: { img: string | null, title: string, description: string }) {
//     return (
//         <div className="flex-grow w-1/3 mx-auto bg-white rounded-xl border">
//             <img className="w-full h-48 object-cover rounded-t-xl" src={img ? img : "imgPlaceholder.svg"} alt={title}/>
//             <div className="p-4">
//                 <h2 className="text-lg font-bold mb-2">{title}</h2>
//                 <p className="text-gray-600">{description}</p>
//             </div>
//         </div>
//     )
// }

import { Link } from "react-router-dom";
import MaterialContent from "./MaterialContent";

export default function Material() {
  const isContent = !!(new URLSearchParams(window.location.search).get("content"));

  // TODO: Create a secure method to check if the user is an editor or not and showing them the appropriate UI

  return isContent ? (
    <MaterialContent />
  ) : (
<>
      {/* Materi */}
      <div className="flex flex-wrap gap-4 mt-4">
        <Link
          to={"/Material?content=new"}
          className="p-8 shadow-lg rounded-lg flex flex-col justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-pencil-square size-24 opacity-50"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fillRule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
            />
          </svg>
          <p className="text-lg opacity-50">Buat Materi Baru</p>
        </Link>
        {/* <div className="flex-grow w-1/3 mx-auto bg-white rounded-xl border">
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
                </div> */}
      </div>
    </>
  );
}
