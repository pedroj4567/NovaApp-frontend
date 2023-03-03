import axios from "axios"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Alerta } from "../../components/Alerta"
const login = () => {
  const [correo,setCorreo] = useState('')
  const [password,setPassword] = useState('')
  const [alerta,setAlerta] = useState({});

  const handlerSubmit = async e =>{
    e.preventDefault();
    if([correo,password].includes('')){
      return setAlerta({msg:"Todos los campos son obligatorios", error : true});
    }
    //sino hay error regresamos el state a su valor original
    setAlerta({});

     //Consultamos el usuario a la api

    try {
      const url = "http://localhost:4000/api/auth/iniciarSesion";
      
      const respuesta = await axios.post(url,{correo,password});
      console.log(respuesta)
    } catch (error) {
      setAlerta({
        msg:error.response.data.msg,
        error: true
      });
      
    }
  }

  //Confirmamos si existe un mensaje
  const {msg} = alerta;

 

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
                
                    <form className="flex flex-col h-3/4 w-3/4  items-center mx-auto "
                      onSubmit={handlerSubmit}
                    >
                     
                        <label className="my-5 text-indigo-700 text-lg font-semibold w-2/3">Ingrese su usuario o email</label>
                        <input type="email" className="w-80 h-10 border border-gray-200 rounded-xl pl-2"
                         id="email"
                         value={correo}
                         onChange = {e => setCorreo(e.target.value)}

                        />
                        <label className="text-left w-2/3 my-5 text-indigo-700 text-lg font-semibold ">Contraseña</label>
                        <input type="password" className="w-80 h-10 border border-gray-200 rounded-xl pl-2 "
                         id="password"
                          value={password}
                          onChange = {e => setPassword(e.target.value)}
                         />
                  
                      <div className="flex justify-center w-80 mt-5">
                        <button
                        type="submit"
                        id='btn'
                        className="bg-indigo-600 w-2/3 text-white capitalize p-2 rounded-xl font-bold hover:bg-indigo-700 transition-all"
                        >Ingresar</button>
                      </div>
                      
                    <div className="w-2/3 mt-2 text-slate-500 cursor-pointer text-left">
                      <div><Link to='/ForgetPassword' className="hover:text-slate-700 transition-colors">¿Olvido su contraseña?</Link></div>
                    </div>
                    {msg && <Alerta
                      alerta={alerta}
                    />}
                    </form>
              </div>
             
        </div>
       
    </>
  )
}

export default login