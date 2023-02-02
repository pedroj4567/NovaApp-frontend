import {HiOutlineSearch } from "react-icons/hi";
import ClienteModal from "../../components/ClienteModal";
function Clientes() {







  return (
    <>
      <div className="w-full h-full mx-5">
          {/* Header */}
          <div className="w-full h-1/4 mt-2 mb-3shadow-lg border">
              <div className="w-full h-1/3 flex justify-between mt-4 mx-2">
                    <div className="w-1/3 relative">
                      <input className=" border-slate-400 bg-indigo-100 h-9 w-full rounded-xl pl-1 ml-5"/>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 absolute top-1 -right-3 text-indigo-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>

                    </div>
                    <div className="w-1/2 relative">
                      <button className="absolute right-5 p-2 rounded-2xl bg-indigo-600 text-white font-semibold">Agregar un nuevo cliente</button>
                    </div>
              </div>
              <div className="flex justify-evenly mt-4">
                  <div>
                    <h2 className="text-indigo-700 font-semibold text-3xl">Clientes</h2>
                  </div>

                  <div className=" w-1/2 flex rounded-xl items-center h-1/2 border border-slate-400 p-1 ">
                      <ul className="w-full flex justify-evenly items-center ">
                        <li className="bg-indigo-700 text-white text-center border py-1.5 cursor-pointer hover:bg-indigo-800 hover:font-semibold transition-all w-full h-full rounded-l-md">Juridico</li>
                        <li className="bg-indigo-700 text-white text-center border py-1.5 cursor-pointer hover:bg-indigo-800 hover:font-semibold transition-all w-full h-full border-l-2">Natural</li>
                        <li className="bg-indigo-700 text-white text-center border py-1.5 cursor-pointer hover:bg-indigo-800 hover:font-semibold transition-all w-full h-full border-l-2">Atendidos</li>
                        <li className="bg-indigo-700 text-white text-center border py-1.5 cursor-pointer hover:bg-indigo-800 hover:font-semibold transition-all w-full h-full rounded-r-md border-l-2">No Atendidos</li>
                      </ul>
                  </div>
              </div>
          </div>

          <div className="h-4/6 shadow-lg bg-white">
          <table class="w-full text-center ">
                <thead className=" h-12">
                  <tr className="text-indigo-700 bg-slate-200">
                    <th className="font-medium ">ID</th>
                    <th className="font-medium ">Nombre y Apellido</th>
                    <th className="font-medium ">Empresa</th>
                    <th className="font-medium ">Correo</th>
                    <th className="font-medium ">Telefono</th>
                    <th className="font-medium ">Tipo</th>
                    <th className="font-medium ">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-slate-500  text-md h-10 hover:text-slate-700 cursor-pointer transition-all hover:bg-gray-100">
                    <td>1</td>
                    <td>Malcolm Lockyer</td>
                    <td>Microsoft</td>
                    <td>pedroj4567@gmail.com</td>
                    <td>04243709647</td>
                    <td>Juridico</td>
                    <td>Eliminar - modificar</td>
                  </tr>
                
                </tbody>
              </table>
          </div>






      </div>
    </>
  )
}

export default Clientes