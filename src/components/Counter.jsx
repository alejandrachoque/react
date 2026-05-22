import { useState } from "react";

const Counter=()=>{
    //aqui se puede aplicar logica js
    const[numero,setNumero]=useState(0);
    const sumar=()=>{
        setNumero(numero+1);
    }
    const restar=()=>{
        setNumero(numero-1);
    
    }
        
    return(
        <div>
            <h2>{numero}</h2>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>restar</button>
            <hr />
        </div>
    )
}
export default Counter;