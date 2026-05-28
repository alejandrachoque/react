import proyectoService from "../services/proyectoService.js";
import { useState } from "react";
const ListaProyectos = () => {
  const[proyectos,setProyectos]=useState(proyectoService.obtenerProyectos());//actualiza el estado de proyectos y lo inicializa con los proyectos del array
  const [titulo,setTitulo]=useState('');//estado para el titulo cuando agrege
  const [category,setCategory]=useState('');
  const [estado, setEstado] = useState(false);
 
  const agregarProyecto=()=>{
    const nuevo={
      id:proyectos.length+1,
      titulo:titulo,
      categoria:category,
      estado:estado,
    }
    proyectoService.agregarProyecto(nuevo);//modifico el arreglo
    setProyectos(proyectoService.obtenerProyectos());// modifico el componente
  }
  return (
    <div className="main">
      <div className="input">
        <input type="text" placeholder="Buscar"/>
        <button>Buscar</button>
       </div>
       <div className="input">
            <input type="text" placeholder="Ingresar titulo..." value={titulo} onChange={(e)=>setTitulo(e.target.value)}/>
            <select  id="categoria" value={category} onChange={(e)=>setCategory(e.target.value)}>
              <option> Educativo</option>
              <option> Salud</option>
              <option> Informatica</option> 
            </select>
            <select  id="estado" value={estado} onChange={(e)=>setEstado(e.target.value==="true")}>
              <option value='true'> Completado</option>
             <option value='false'> En proceso</option>
            </select>
            <button onClick={agregarProyecto}>Agregar</button>
       </div>
      <div id="contenedorCard">
        {
          proyectos.map(p=>(
            <div className="card" key={p.id}>
              <h2>Titulo : {p.titulo}</h2>
              <p>Categoria : {p.categoria}</p>
              <p>Estado: {p.estado?'Hecho':'En proceso'}</p>
            </div>
          ))
        }
      </div>
    </div>
      
  );
};
export default ListaProyectos;
