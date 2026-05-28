import './CardProyecto.css'
const CardProyecto = ({proyecto, seleccionarProyecto}) => {
const {titulo,categoria,estado}=proyecto;
    return (
        <div className="card">

            <h3>Titulo: {titulo}</h3>

            <p>Categoria: {categoria}</p>

            <p>
               Estado: {estado ? 'Activo' : 'Inactivo'}
            </p>
            
            <button>Eliminar</button>
           <button onClick={() => seleccionarProyecto(proyecto)}>Ver detalle</button>

        </div>
    )
}

export default CardProyecto;