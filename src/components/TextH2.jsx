import { useState, useEffect } from "react";
const TextH2=()=>{
    const[text,setText]=useState('');
    const handleText=(e)=>{
       {/* console.log(e.target.value);*/}
        setText(e.target.value);
    }
       
   /* useEffect(()=>{
        console.log('componente montado');
         return()=>{
            console.log('Componente desmontado');   
        }
    },[])*/
    useEffect(()=>{
        console.log('texto modificado');  
    },[text]);
    //primer parametro una arrow function y segundo parametro un array
    //si el segundo parametro es un [] entonces el contenido de useEffect se ejecuta solo cuando se monta unicamente
    return(
        <div>
            <input type="text" onChange={handleText}/>
            <p>{text}</p>
        </div>
       
    )
}
export default TextH2;