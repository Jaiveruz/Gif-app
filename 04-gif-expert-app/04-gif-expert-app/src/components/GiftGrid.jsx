import { useEffect, useState } from "react";
//import { getGifs } from "../helpers/getGifs";
import { GiffItem } from "./GiffItem";
import { useFetchGifs } from "../hooks/useFetchGifs";



/*este componente lo que hace es proporcionarnos el listado en el div*/

export const GiftGrid = ({ category }) => {
    
    const { images, isLoading } = useFetchGifs( category );
    
    console.log(isLoading)
    /*este hook es usado para que no renderice muchas veces la funcion y de esta manera nos quede
    bien la linea de codigo */
    
    return (
    <>
        <h3>{ category }</h3>

        {
            isLoading && ( <h2>Cargando...</h2>  )
        }

        <div className="card-grid">
            {
                images.map( ( images ) => (
                    <GiffItem 
                    key={images.id}
                    { ...images }
                    />
                ))
            }
                       
        </div>


    </>
  )
}
