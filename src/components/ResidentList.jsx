import { useEffect, useState } from "react"
import Resident from "./Resident"
import { paginationLogic } from "../util/pagination"

const FIRST_PAGE = 1

const ResidentList = ({residents, location}) => {
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE)


  const {residentsInPage,pages} = paginationLogic(currentPage,residents)

  useEffect(() => {
    setCurrentPage(FIRST_PAGE)
  }, [location])
  

  
  //const hasResidents = residents?.length > 0
  return (
    <section>
      {/* Lista de residentes */}
      <section className="grid gap-8 grid-cols-[repeat(auto-fill,280px)] justify-center max-w-[1024px] mx-auto py-6">
        {
          residentsInPage?.map((resident) => <Resident key={resident} residentUrl={resident}/>)
        }
      </section>

      {/* Paginación */}
      <section className="flex justify-center gap-2  max-w-[1024px] mx-auto text-black font-bold ">
        {
          pages.map(page => (
          <button className={`bg-green-600 ${currentPage === page ? "bg-[#8EFF8B] blur-none scale-100": "bg-[rgba(142,255,139,0.5)]"}  px-3 py-2 scale-75 hover:scale-100 duration-700  rounded-md blur-[2px] hover:blur-none`} key={page} onClick={()=> setCurrentPage(page)} >{page}</button> 
          ))
        }
      </section>
    </section>
  )
}

export default ResidentList