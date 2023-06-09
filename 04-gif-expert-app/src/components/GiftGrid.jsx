import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

/*este componente lo que hace es proporcionarnos el listado en el div*/

export const GiftGrid = ({ category }) => {
    
    const [counter, setCounter] = useState(10);
    /*este hook es usado para que no renderice muchas veces la funcion y de esta manera nos quede
    bien la linea de codigo */
    useEffect( () => {  
        getGifs( category );
    }, [])
    
   
    
    return (
    <>
        <h3>{ category }</h3>
    </>
  )
}
