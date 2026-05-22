import proyectoService from "../services/proyectoService.js";
import { useState } from "react";
import CardProyecto from "./CardProyecto.jsx";
const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos(),
  );
  
  return (
    <div className="card_content">
      <input type="text" placeholder="Buscar..." />
      <button>Agregar</button>
      <h1>Proyectos</h1>
     
         {proyectos.map((p) => (
        <CardProyecto key={p.id} proyecto={p}/>
      ))}
      </div>
  );
};
export default ListaProyectos;
