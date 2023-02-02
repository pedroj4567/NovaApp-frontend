import {Link} from 'react-router-dom'
const ForgetPassword = () => {
  return (
    <>
      <div className="bg-slate-100 w-full h-full ">
          <div className="bg-white h-3/4 w-1/2 mx-auto my-20 shadow-lg flex flex-col justify-center items-center relative text-center">
          {/* Titulo */}
            <div className="w-1/2 h-1/8 text-4xl font-semibold text-indigo-700 absolute top-12 tracking-wide ">
              <h1>Resetear Contraseña</h1>
            </div>
            {/* Cuerpo del contenedor */}
              <div className='mb-10 text-md text-slate-700 w-2/3'>
                <p>Bienvenido querido <span className='text-indigo-700 font-semibold text-lg'>usuari@</span>, este es el apartado de reseteo de contraseña.</p>
                <p>Al darle click al boton de enviar, le llegará un correo electronico con un enlace para resetar su cuenta.</p>
                <p>Debe tener en cuenta que posee <span className=' text-indigo-700 font-semibold'>24hrs</span> para poder resetar su contraseña</p>
              </div>
              <form className='flex flex-col'>
                <label className='text-indigo-700 mb-3 font-semibold'>Ingrese el correo electronico asociado a su cuenta.</label>
                <input className="border h-9 rounded border-indigo-500 pl-1 " type="email"/>
                <button type="submit" className='bg-green-300 my-5 font-semibold rounded-lg h-9 text-white hover:bg-green-400 transition-all hover:font-bold'>Enviar</button>
              </form>
                <div className='-mt-4'>
                  <Link to="/" className='text-slate-500'>Volver al login.</Link>
                </div>

                <div className=" w-full text-center absolute bottom-12">
                  <h1 className="text-4xl  font-semibold"><span className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-green-400 to-indigo-600">NovaApp</span></h1>
                </div>
          </div>
      </div>
    </>
  )
}

export default ForgetPassword