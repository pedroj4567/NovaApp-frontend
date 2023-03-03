import { useState } from "react"
import {Link} from "react-router-dom"

import { HiChevronDoubleLeft} from "react-icons/hi2";

export default function SideBar() {
  //Estado inicial del componente
  const [open,setOpen] = useState(true)

  const hiddenLetters = () =>{
    const links = document.querySelectorAll('a span')
    links.forEach((link)=>{
      if(!open){
        link.classList.add('hidden');
       
      }else{
        link.classList.remove('hidden');
      }
      
    })

  }

  hiddenLetters()

  return (
    <div className={`${open ? "w-72" : "w-20"} h-screen transition-all shadow-xl shadow-stone-300 relative flex flex-col`} >
      <div className="flex justify-center flex-col items-center">
        <img src="/ndt.png" className={`${open ? "h-20 w-20" :"h-18 w-14 mt-2"}`}></img>
        <h2 className={`${open ? '' : "hidden transition-all"} font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-green-400 to-indigo-600`}>NovaApp</h2>
      </div>
      <div className="">
        <HiChevronDoubleLeft 
        className={`${open ? "rotate-180" : ""} absolute cursor-pointer rounded-full -right-4 bg-white top-12 w-7 border-2 border-indigo-600  text-slate-700 h-7`}
        onClick={()=>setOpen(!open)}
        id="btn"
        />
      </div>
      {/* Enlaces */}
      <div className="flex flex-col h-4/5" >
          <ul className="h-5/6  mt-4" id="links">
            

            <li className="flex items-center  transition-all py-1 mt-4 hover:bg-indigo-600 hover:font-semibold active:bg-indigo-800 active:ease-in-outduration-500 mx-2 rounded-lg">
                  <Link to="/admin" className={`text-xl  text-gray-700 w-full hover:text-white h-12 items-center flex`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`flex h-7 w-10  ${!open ? 'mx-auto hover:text-white':""}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                    <span className="flex items-center mt-0.5 h-full ">Clientes</span>
                  </Link>
            </li>

            <li className="flex items-center  transition-all py-1 mt-4 hover:bg-indigo-600 hover:font-semibold active:bg-indigo-800 active:ease-in-outduration-500 mx-2 rounded-lg">
                  <Link to="/admin/Proyectos" className={`text-xl  text-gray-700 w-full hover:text-white h-12 items-center flex`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`flex h-7 w-10  ${!open ? 'mx-auto hover:text-white':""}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                    </svg>
                    <span className="flex items-center mt-0.5 h-full">Proyectos</span>
                  </Link>
            </li>

            <li className="flex items-center  transition-all py-1 mt-4 hover:bg-indigo-600 hover:font-semibold active:bg-indigo-800 active:ease-in-outduration-500 mx-2 rounded-lg">
                  <Link to="/admin/Usuarios" className={`text-xl  text-gray-700 w-full hover:text-white h-12 items-center flex`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`flex h-7 w-10 ${!open ? 'mx-auto hover:text-white':""}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                    <span className="flex items-center mt-0.5 h-full">Usuarios</span>
                  </Link>
            </li>
          </ul> 
      </div>
        <div className="flex justify-center">
          <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-10 hover:text-indigo-700 transition-all">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
        </Link>
        </div>
    </div>
  )
}
