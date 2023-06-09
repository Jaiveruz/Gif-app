import { useState } from "react";


export const AddCategory = ({ onNewCategories }) => {
    
    const [inputValue, setInputValue] = useState(''); 

    const onChange = ({ target }) => { /*funcion usada para que cuando se escriba algo dentro del formulario podamos verlo dentro de la consola  */
        
        //console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => { /*funcion usada para en el formulario, para que dentro del mismo pueda ser enviada la informacion hacia la consola y se refresque  */
        
        event.preventDefault();
        if ( inputValue.trim().length <=1 ) return;   /*esta condicion cumple que si se tiene que escribit mas de una letra para que se guarde*/
        
        onNewCategories( inputValue.trim() );
        //setCategories( categories => [ inputValue, ...categories ]) 
        setInputValue('') /* se usa para que cuando uno le de entes, se coloque en blanco la caja del input*/
    }


    return (/*se coloca dentro de un formulario para mejor comprension y poder trabajar los formularios*/
          
        <form onSubmit={ onSubmit }>   <input
            type="text"
            placeholder="Buscar gifs" /*esto es para el fondo del formulario*/
            value={inputValue} 
            onChange={ onChange } /*para cueando se da un enter, se llama a la funcion onchange para que nos de los cambios dentro del formulario y se puedan enviar hacia la consola */       
            />
         </form>
  )};
