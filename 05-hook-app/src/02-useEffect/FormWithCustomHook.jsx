import { useEffect } from "react";
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

    const { fromState, onInputChange, onResetForm, userName, email, clave } = useForm({
            userName: '',
            email: '',
            clave: '',
    });

    //const { userName, email, clave } = fromState;


  return (
    <>
        <h1>Form With Custom Hook</h1>
        <hr />

        <input type="text"
        className="form-control"
        placeholder="UserName"
        name="userName"
        value={ userName }
        onChange={onInputChange}
        />
        <input type="email"
        className="form-control mt-2"
        placeholder="name@correo.co"
        name="email"
        value={ email }
        onChange={onInputChange}
        />
        <input type="password"
        className="form-control mt-2"
        placeholder="Clave"
        name="clave"
        value={ clave }
        onChange={onInputChange}
        />
        <button className="btn btn-primary mt-2"  onClick={ onResetForm }>Borrar</button>
    </>
  )
}
