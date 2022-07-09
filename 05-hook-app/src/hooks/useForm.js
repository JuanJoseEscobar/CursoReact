import { useState } from "react";


export const useForm = ( initialForm = {} ) => {

    const [fromState, setFromState] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFromState({
            ...fromState,
            [ name ]: value, //propiedad computada, camba la variable con relacion al nombre
        });
    };

    const onResetForm = ()=>{
        setFromState( initialForm );
    }

  return {
      fromState,
      onInputChange,
      onResetForm,
      ...fromState,

  }
}
