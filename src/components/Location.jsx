import axios from 'axios'
import React from 'react'

const Location = ({location,setLocation}) => {

  const handleSubmit = (e) => {
    e.preventDefault()

    const newLocation = e.target.newLocation.value.trim()

    if(newLocation === '') return setLocation(location)

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`

    axios.get(URL)
      .then(({data}) => setLocation(data))
      .catch(err => window.alert('This location does not exist.'))
  
  }

  return (
    
      <section className="grid justify-center text-center gap-3 text-[rgba(142,255,139,0.5)]">
      {/* Input de bsqueda */}
      <form onSubmit={handleSubmit} className='flex justify-center items-center '>
        <input id="newLocation" type="text" placeholder="Type a location ID.." className="text-[rgba(142,255,139,0.5)] rounded-l-lg px-2 bg-transparent border-2 border-[#8EFF8B]  "/>
        <button className=' bg-[rgba(142,255,139,0.5)] px-2 rounded-r-lg border-2 border-[#8EFF8B] hover:bg-[#8EFF8B] hover:text-black'> <i className='bx bx-search-alt-2'></i></button>
      </form>

      <h1 className=' font-bold text-[#8EFF8B] lg:text-2xl'>¡Welcome to the crazy universe!</h1>

      {/*  Info Location */}
      <section className='grid justify-center text-center gap-2 py-3 mx-2 text-[#8EFF8B] bg-[#8EFF8B]/50 rounded-lg duration-1000 hover:shadow-lg hover:shadow-[#8EFF8B] hover:bg-black/50'>
        <h2>{location?.name}</h2>
        <ul className='flex gap-3 px-2'>
          <li>Type: {location?.type}</li>
          {
          location?.dimension === "" ?
            <li>Dimension: N/A</li> 
            :
            <li>Dimension: {location?.dimension}</li> 
          }
          
          <li>Population: {location?.residents.length}</li>
        </ul>
      </section>
    </section>



   
  )
}

export default Location