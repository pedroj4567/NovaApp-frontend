import { useState } from "react"
import { Link } from "react-router-dom"
const login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  //validaciones inpur
  const validationInputs = (e) =>{
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const fakeBtn = document.querySelector('#btn')

  }
    validationInputs();
  return (
    <>
        {/* Seccion de contenido */}
        <div className="bg-gradient-r from-slate-400 to-slate-300  w-1/2 flex flex-col justify-center items-center ">
            <div className=" w-full text-center">
              <h1 className="text-4xl text-gray-700 font-semibold">Bienvenido a <span className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-green-400 to-indigo-600">NovaApp</span></h1>
            </div>
            <div className="m-10 ">
              <p className="text-lg text-center font-bold text-gray-500">Sistema de información para el control de clientes y proyectos de la empresa <span className="text-xl text-indigo-500">NovadevTechnolgies C.A</span></p>
            </div>
            <div className="">
              <img src="./../../../public/logo.png" className="h-80 w-80"></img>
            </div>
        </div>

        <div className="h-full w-1/2 flex items-center">
            <div className="w-3/4 mx-auto h-3/4 bg-gray-50 flex flex-col rounded-lg shadow-xl shadow-slate-300 border justify-center">
                <div className="w-full text-center mt-4 py-4 text-indigo-700">
                    <h2 className="text-4xl font-semibold">Login </h2>
                </div>
                
                    <form className="flex flex-col h-3/4 w-3/4  items-center mx-auto ">
                     
                        <label className="my-5 text-indigo-700 text-lg font-semibold w-2/3">Ingrese su usuario o email</label>
                        <input type="email" className="w-80 h-10 border border-gray-200 rounded-xl pl-2 " id="email"/>
                        <label className="text-left w-2/3 my-5 text-indigo-700 text-lg font-semibold ">Contraseña</label>
                        <input type="password" className="w-80 h-10 border border-gray-200 rounded-xl pl-2 " id="password"/>
                  
                      <div className="flex justify-center w-80 mt-5">
                        <Link to="/admin" className="bg-green-300 w-80 h-10 rounded-xl hover:bg-green-400 hover:text-white text-center transition-all font-semibold flex justify-center items-center" id="btn">Ingresar</Link> 
                      </div>
                      
                    <div className="w-2/3 mt-2 text-slate-500 cursor-pointer text-left">
                      <div><Link to='/ForgetPassword' className="hover:text-slate-700 transition-colors">¿Olvido su contraseña?</Link></div>
                    </div>
                    </form>
              </div>
        </div>
    </>
  )
}

export default login