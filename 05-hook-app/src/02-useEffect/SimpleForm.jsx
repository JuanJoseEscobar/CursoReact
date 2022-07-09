import { useState, useEffect } from "react"
import { Message } from "./message";


export const SimpleForm = () => {

    const [fromState, setFromState] = useState({
        userName: 'strider',
        email: 'astro@correo.co'
    });

    const { userName,email } = fromState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFromState({
            ...fromState,
            [ name ]: value,//propiedad computada, camba la variable con relacion al nombre
        });
    }

    useEffect( () => {
        //console.log('useEffect called');
    },[]);

    useEffect( () => {
        //console.log('fromState change');
    },[fromState]);

    useEffect( () => {
        //console.log('email change');
        
    },[email]);


  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input type="text"
        className="form-control"
        placeholder="UserName"
        name="userName"
        onChange={onInputChange}
        />
        <input type="email"
        className="form-control mt-2"
        placeholder="name@correo.co"
        name="email"
        onChange={onInputChange}
        />
        {
            userName === 'astro' && <Message/>
        }
    </>
  )
}
