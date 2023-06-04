import "../resident.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Resident = ({residentUrl}) => {

  const [residentInfo , setresidentInfo  ] = useState(null)
  
  const statusStyles = {
    "Alive":"bg-green-500",
    "Dead":"bg-red-500",
    "unknown":"bg-gray-500",
  }

  useEffect(() => {
    axios.get(residentUrl)
      .then(({data})=> setresidentInfo(data))
      .catch((err)=> console.log(err))
  }, [])
  
  

  return (
    
        <article className="border-2 border-[rgba(142,255,139,0.5)] bg-transparent text-[rgba(142,255,139,0.5)] text-center " >
            {
             residentInfo?.image ? 
            <div>
              <div className="relative">
                <img src={residentInfo?.image} alt="" className="mx-auto w-auto" /> 
              <div  className="flex items-center absolute top-3/4 left-1/2 -translate-x-1/2 bg-black/70 p-1 rounded-sm px-3 gap-2 border-2 border-[rgba(142,255,139,0.5)] text-white">
                <div id="status_Resident" className={` ${statusStyles[residentInfo?.status]} h-4 aspect-square rounded-full `}></div>
                {residentInfo?.status}
                </div>
              </div>
              <section className="text-start px-3 py-1">
                <h4 className="text-white font-bold text-xl">{residentInfo?.name}</h4>
                <hr className="bg-[#8EFF8B] text-[#8EFF8B] h-[1px] border-none m-[2px]" />
                <ul className="text-gray-600">
                  <li>Species: <span className="text-white">{residentInfo?.species}</span></li>
                  <li>Origin: <span className="text-white">{residentInfo?.origin.name}</span></li>
                  <li>Times appear: <span className="text-white">{residentInfo?.episode.length}</span></li>
                </ul>
              </section>
            </div>
          :
              <div className="spinner mx-auto p-6">
                <div className="spinner1"></div>
              </div>
              
              
            }
        </article>
  )
}
export default Resident