import React from 'react'
import {Link} from 'react-router-dom'
function modalProyectos() {
  return (
    <>
      <section className='border h-full w-full flex justify-center items-center'>
          <div className='w-1/2 h-3/4 rounded-lg shadow-xl'>
            <div className='w-full h-16 text-3xl text-center flex justify-center items-center bg-slate-100'>
              <h1 className='font-bold text-purple-700'>Nuevo Proyecto</h1>
            </div>
            <form className='w-full  flex flex-col h-5/6 px-4 justify-center items-center'>
              <label className='text-indigo-700 font-semibold ml-5 '>Nombre del proyecto</label>
              <input type="text" className='border border-green-300 h-10 rounded-md w-3/4 my-2'/>
              <label className='text-indigo-700 font-semibold ml-5 '>Ubicacion</label>
              <input type="text" className='border border-green-300 h-10 rounded-md  w-3/4 my-2'/>
              <label className='text-indigo-700 font-semibold ml-5 '>Fecha de Inicio</label>
              <input type="date" className='border border-green-300 h-10 rounded-md text-sm px-2  w-3/4 my-2'/>
              <label className='text-indigo-700 font-semibold ml-5 '>Encargado</label>
              <input type="text" className='border border-green-300 h-10  rounded-md w-3/4 my-2'/>
              <label className='text-indigo-700 font-semibold ml-5 '>Area del proyecto</label>
              <select className='border border-green-300 h-10 rounded-md  w-1/2 text-center my-2 '>
                <option>Redes y telecomunicaciones</option>
                <option>Desarrollo de software</option>
                <option>Training</option>
                <option>Diseño Web</option>
                <option>Gerencia de proyecto</option>
              </select>
              <Link to="/admin/proyectos" className='my-2 rounded-md h-8 bg-indigo-700 text-white font-semibold w-1/2 mx-auto text-center'>Guardar</Link>
            </form>
          </div>
      </section>
    </>
  )
}

export default modalProyectos