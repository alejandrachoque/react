const DetalleProyecto = ({ proyecto }) => {

    return (

        <div className="detalle">

            <h2>Detalle del proyecto</h2>

            <h3>{proyecto.titulo}</h3>

            <p>{proyecto.descripcion}</p>

            <p>{proyecto.equipo}</p>

           

        </div>
    )
}

export default DetalleProyecto;