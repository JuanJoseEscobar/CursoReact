import { useRef } from "react";


export const FocusScreen = () => {

    const inputRef = useRef();
    const inputRef2 = useRef();

    const onClick = ()=>{
        inputRef.current.select();
        inputRef2.current.select();
    }

  return (
    <>
      <h1>Focus screen</h1>
      <hr />

      <input type="text"
      ref={inputRef}
      placeholder="Ingrese su nombre"
      className="form-control"
      />
      <input type="text"
      ref={inputRef2}
      placeholder="Ingrese su apellido"
      className="form-control mt-2"
      />

      <button
      className="btn btn-primary mt-2"
      onClick={ onClick }
      >
        set Focus
      </button>
    </>
  )
}
