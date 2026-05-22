const proyectoService = (() => {
  let proyectos = [
    { id: 1, titulo: "Aula invertida", categoria: "educativo", estado: true },
    { id: 2, titulo: "Voces del saber", categoria: "arte", estado: false },
    {
      id: 3,
      titulo: "Educación sexual integral obligatoria",
      categoria: "salud",
      estado: false,
    },
    {
      id: 4,
      titulo: "Lectura para todos",
      categoria: "educativo",
      estado: true,
    },
    {
      id: 5,
      titulo: "Matematicas avanzadas",
      categoria: "educativo",
      estado: false,
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