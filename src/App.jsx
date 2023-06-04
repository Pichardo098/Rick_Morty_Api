
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { getRandomDimnesion } from './util/random'
import Location from './components/Location'
import ResidentList from './components/ResidentList'

function App() {
  

  const [location, setLocation] = useState(null)

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimnesion()}`

    axios.get(URL)
      .then(({data}) => setLocation(data))
      .catch(err => console.log(err))
  }, [])
  
  const hasResidents = location?.residents.length



  return (
    <div id='body' className="min-h-screen bg-black text-white bg-[url('/imagesbkg/bkg-header.jpg')] bg-cover bg-fixed bg-center flex flex-col justify-between ">
      <header className=" min-w-fit">
        <section id='elipse' className=" relative bg-[url('/imagesbkg/elipse-shadow.svg')] bg-center  bg-cover bg-no-repeat pb-10 lg:bg-contain  ">
          <div className=" flex justify-center relative z-10 overflow-hidden ">
             <img id='bkg_title' className='top-[-150px] relative max-w-full' src="/imagesbkg/bkg-title.svg" alt="nebulosa" /> 
          </div>
          <div className='flex justify-center absolute z-10  top-1/4 -translate-y-[100%] mx-auto w-[80%] left-1/2 -translate-x-1/2  sm:w-auto lg:-translate-y-[80%]'>
            <img className='title_principal' src="/imagesbkg/title_principal.svg" alt="title_rick_y_morty" />
          </div>
          <Location location={location} setLocation = {setLocation} />
        </section>
      </header>
      <main>
        {
          hasResidents ?
          <ResidentList residents= {location?.residents} location={location}/>
          :
          <h2 className='text-[rgba(142,255,139,0.5)] text-center font-bold my-auto'>This location has no residents.</h2>
        }
      </main>
      <footer className="text-center text-[rgba(142,255,139,0.5)]  p-4 text-xl">
        <h2>Contact</h2>
        <ul className="flex justify-center gap-3 text-xl">
          <li className="hover:text-white hover:scale-150 duration-1000">
            <a href="https://github.com/Pichardo098?tab=repositories" target="_blank" rel="noopener" id="git">
              <i className='bx bxl-github'></i>
            </a>
          </li>
          <li className="hover:text-blue-700 hover:scale-150 duration-1000">
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener" id="linkdn">
              <i className='bx bxl-linkedin-square'></i>
            </a>
          </li>
        </ul>
        <p>Created by Jesús Pichardo.</p>
      </footer>
    </div>
  )
}

export default App
