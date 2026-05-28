const proyectoService = (() => {
  let proyectos = [
    { id: 1, titulo: "Aula invertida", categoria: "educativo", estado: true, 
     descripcion:"Explora el modelo de aula invertida y su impacto en el aprendizaje activo.",
     equipo:"Maria Mercedes Lopez, Gustavo Flores",
     recursos:"PDF, GitHub, Youtube" 
    },
    { id: 2, titulo: "Voces del saber", categoria: "arte", estado: false,
      descripcion:"Explora el modelo de aula invertida y su impacto en el aprendizaje activo.",
     equipo:"Mario Martinez, Gustavo Contreras",
     recursos:"PDF, GitHub, Youtube"
     },
    {
      id: 3,
      titulo: "Educación sexual integral obligatoria",
      categoria: "salud",
      estado: false,
     descripcion:"Impulsa la educación sexual y respondabiliad para los jovenes y adultos.",
     equipo:"Rosa SanRoman, Francisco Conteras",
     recursos:"PDF, GitHub, Youtube"
    },
    {
      id: 4,
      titulo: "Lectura para todos",
      categoria: "educativo",
      estado: true,
      descripcion:"Impulsa la lectura en todos los niveles educativos.",
     equipo:"Octavio Pereira, Juan Perez",
     recursos:"PDF, GitHub, Youtube"
      
    },
    {
      id: 5,
      titulo: "Matematicas avanzadas",
      categoria: "educativo",
      estado: false,
      descripcion:"Curso de matematicas avanzadas para adolescentes.Se requiere conocimiento previo de matematicas basicas",
     equipo:"Harry Potter, Florencia Zerpa",
     recursos:"PDF, GitHub, Youtube"
    },
  ];
  const obtenerProyectos = () => [...proyectos];
  const agregarProyecto = (p) => proyectos.push(p);
  const eliminarProyecto=(id)=>{
    proyectos=proyectos.filter(p=>p.id!==id);
  }
  const buscarProyecto=(term)=>{
    return proyectos.filter(p=>p.titulo.toLowerCase().includes(term.toLowerCase()));
  }
  return{obtenerProyectos,agregarProyecto,eliminarProyecto,buscarProyecto};
})();

export default proyectoService;