import './CardProyecto.css'
const CardProyecto = ({ proyecto }) => {

    return (
        <div className="card">

            <h3>Titulo: {proyecto.titulo}</h3>

            <p>Categoria: {proyecto.categoria}</p>

            <p>
               Estado: {proyecto.estado ? 'Activo' : 'Inactivo'}
            </p>

            <button>Eliminar</button>

        </div>
    )
}

export default CardProyecto;