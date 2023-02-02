const Projects = ()=>{
    return(
        <>
            <div className="w-full h-5/6 mx-10 flex justify-evenly ">
                <div className="w-full flex justify-center items-center relative">
                    <h2 className="absolute top-12 left-14 text-3xl text-purple-700 font-semibold">Proyectos</h2>
                    <div className="border w-5/6 h-4/6 rounded-lg shadow-lg">
                        <div className="w-full">
                            <button className="bg-purple-500 ml-3 mt-3 p-3 rounded-2xl text-white font-semibold hover:bg-purple-600 transition-all">Nuevo Proyecto</button>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="mt-5 text-xl text-indigo-600 font-semibold text-center">Filtros por categoria</h2>
                            
                        </div>
                        <div className="bg-gray-100 w-5/6 border mt-2 mx-auto h-4/6">
                                
                        </div>
                       
                    </div>
                </div>
                <div className="w-full justify-center flex items-center">
                    <div className="border w-3/4 h-5/6 shadow-lg overflow-y-scroll scroll-smooth">
                        <ul className="w-full">
                            <li className="border-green-300 bg-indigo-700 h-16 hover:bg-indigo-800 m-3 rounded-2xl px-3 text-sm flex justify-between items-center text-white">
                                <div>
                                    <h3 className="font-bold">Mantenimiento a fibra Optica</h3>
                                    <p><span className="font-bold">Tipo:</span> Redes y telecomunicaciones</p>
                                </div>
                                <div>
                                    <p><span className="font-bold">Lugar:</span> Calabozo, Edo.Guarico</p>
                                    <div className="flex justify-center mt-1">
                                        <button className="px-4 font-semibold rounded-md bg-green-400 hover:bg-green-500 transition-all hover:text-black">Ver mas</button>
                                    </div>
                                </div>
                            </li>

                            <li className="border-green-300 bg-indigo-700 h-16 hover:bg-indigo-800 m-3 rounded-2xl px-3 text-sm flex justify-between items-center text-white">
                                <div>
                                    <h3 className="font-bold">Kraken System V1.0</h3>
                                    <p><span className="font-bold">Tipo:</span> Desarrollo de software</p>
                                </div>
                                <div>
                                    <p><span className="font-bold">Lugar:</span> San juan de los Morros, Edo.Guarico</p>
                                    <div className="flex justify-center mt-1">
                                        <button className="px-4 font-semibold rounded-md bg-green-400 hover:bg-green-500 transition-all hover:text-black">Ver mas</button>
                                    </div>
                                </div>
                            </li>

                            <li className="border-green-300 bg-indigo-700 h-16 hover:bg-indigo-800 m-3 rounded-2xl px-3 text-sm flex justify-between items-center text-white">
                                <div>
                                    <h3 className="font-bold">NovaAPP </h3>
                                    <p><span className="font-bold">Tipo:</span> Desarrollo de software</p>
                                </div>
                                <div>
                                    <p><span className="font-bold">Lugar:</span> San juan de los Morros, Edo.Guarico</p>
                                    <div className="flex justify-center mt-1">
                                        <button className="px-4 font-semibold rounded-md bg-green-400 hover:bg-green-500 transition-all hover:text-black">Ver mas</button>
                                    </div>
                                </div>
                            </li>

                            <li className="border-green-300 bg-indigo-700 h-16 hover:bg-indigo-800 m-3 rounded-2xl px-3 text-sm flex justify-between items-center text-white">
                                <div>
                                    <h3 className="font-bold">Capacitación de Redes</h3>
                                    <p><span className="font-bold">Tipo:</span> Cursos y aprendizajes</p>
                                </div>
                                <div>
                                    <p><span className="font-bold">Lugar:</span> La Victoria, Edo.Aragua</p>
                                    <div className="flex justify-center mt-1">
                                        <button className="px-4 font-semibold rounded-md bg-green-400 hover:bg-green-500 transition-all hover:text-black">Ver mas</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Projects