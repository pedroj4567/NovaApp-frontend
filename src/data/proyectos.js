const proyectos = [
    {
        id:1,
        nombreProyecto:"Mantenimineto a fibra",
        lugar:"Calabozo, Edo Guarico",
        tipo:"redes y telecomunicaciones",
        responsables:"Cesar Rivas",
        fechaInicio: "20/08/2022",
        fechaCulminacion: '20/02/2022'
    },
    {
        id:2,
        nombreProyecto:"KrakenSys v1.0",
        lugar:"San juan de los Morros, Edo Guarico",
        tipo:"Desarrollo de software",
        responsables:"Carlos Soto",
        fechaInicio: "25/10/2022",
        fechaCulminacion: '20/01/2022'
    },
    {
        id:3,
        nombreProyecto:"NovaApp v1.0",
        lugar:"San juan de los Morros, Edo Guarico",
        tipo:"Desarrollo de software",
        responsables:"Cesar Rivas",
        fechaInicio: "25/10/2022",
        fechaCulminacion: '20/01/2022'
    },
    {
        id:4,
        nombreProyecto:"Curso de redes",
        lugar:"San juan de los Morros, Edo Guarico",
        tipo:"Training",
        responsables:"Cesar Rivas",
        fechaInicio: "25/10/2022",
        fechaCulminacion: '20/01/2022'
    },
]

const addProyect = (proyect)=>{
    const proyectos = [proyectos,...proyect];
}

export {
    proyectos,
    addProyect 
}