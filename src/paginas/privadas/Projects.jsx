import {useState} from 'react'
import { Link } from 'react-router-dom'
import {proyectos} from '../../data/proyectos.js'
const Projects = ()=>{
    const [seleccionado,setSeleccionado] = useState(true)

    const mostrarModalAgregarProyecto = () =>{
        
    }




    return(
        <>
            <div className="w-full h-5/6 mx-10 flex justify-evenly ">
                <div className="w-full flex justify-center items-center relative">
                    <h2 className="absolute top-12 left-14 text-3xl text-purple-700 font-semibold">Opciones</h2>
                    <div className="border w-5/6 h-4/6 rounded-lg shadow-lg">
                        <div className="w-full">
                            <Link 
                                className="bg-purple-500 ml-3  p-3 rounded-2xl text-white font-semibold hover:bg-purple-600 transition-all"
                                to="/admin/agregarProyecto"
                                
                            >Nuevo Proyecto</Link>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="mt-5 text-xl text-indigo-600 font-semibold text-center">Filtros por categoria</h2>
                            
                        </div>
                        <div className="bg-gray-100 w-5/6 border mt-2 mx-auto h-4/6">
                            <div className="text-xs font-semibold flex justify-between mx-3 mt-3">
                                <li className={`border-2 list-none cursor-pointer py-1 px-1 rounded-xl border-purple-500 ${!seleccionado ? "bg-green-500" : ""}`}>Redes y telecomunicaciones</li>
                                <li className={`border-2 list-none cursor-pointer py-1 px-1 rounded-xl border-purple-500 ${!seleccionado ? "bg-green-500" : ""}`}>Desarrollo de software</li>
                                <li className={`border-2 list-none cursor-pointer py-1 px-1 rounded-xl border-purple-500 ${!seleccionado ? "bg-green-500" : ""}`}>Desarrollo Web</li>
                            </div>
                            <div className="text-xs font-semibold flex justify-between mx-3 mt-3">
                                <li className={`border-2 list-none cursor-pointer py-1 px-1 rounded-xl border-purple-500 ${!seleccionado ? "bg-green-500" : ""}`}>Training</li>
                                <li className={`border-2 list-none cursor-pointer py-1 px-1 rounded-xl border-purple-500 ${!seleccionado ? "bg-green-500" : ""}`}>Gestión de Proyectos</li>
                                <li className={`border-2 list-none cursor-pointer py-1 px-1 rounded-xl border-purple-500 ${!seleccionado ? "bg-green-500" : ""}`}>Soporte Técnico</li>
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div className="w-full justify-center flex items-center flex-col">
                    <h2 className='text-2xl text-indigo-700 mb-5 font-bold'>Proyectos</h2>
                    <div className="border w-3/4 h-5/6 shadow-lg overflow-y-scroll scroll-smooth">
                        <ul className="w-full" id="proyectos">

                          
                        </ul>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Projects