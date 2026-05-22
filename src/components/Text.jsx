import { useState} from "react";
import TextH2 from "./TextH2";

const Text=()=>{
    const[show,setShow]=useState(false);
    const handleShow=()=>{
        setShow(!show);
    }
    return(
        <div>
           {show&& <TextH2/>} 
            {/*{show===true?<h1>Hola mundo!</h1>:<h1>Chau mundo!</h1>}*/}
            <button onClick={handleShow}>{show?'Ocultar':'Mostrar'}</button>
        </div>
    )
}
export default Text;
//montaje
//actualizacion
//desmontaje