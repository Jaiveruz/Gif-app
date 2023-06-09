import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";



export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Dragon ball'])
  

    const onAddCategory = ( newCategory ) => {
        
        if ( categories.includes( newCategory ) ) return;
        //console.log( newCategory );
        setCategories ([ newCategory , ...categories  ]);
    }
        //console.log(categories)
    return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
        onNewCategories = { value => onAddCategory( value ) } /*otra forma de hacer el llamado al modulo padre*/
        />

        {
            categories.map( ( category ) =>(  /*de esta forma podemos eliminar la etiqueta ol y de esta manera llamar el otro componente*/
                <GiftGrid 
                    key={ category } 
                    category={ category } /> /*tambien al llamar a la otra categoria nos ayuda a mejorar el codigo y que se vea mas limpio*/              
                ))
        } 
      
    </>
  )
}
