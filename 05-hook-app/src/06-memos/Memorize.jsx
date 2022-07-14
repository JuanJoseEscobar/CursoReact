import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";


export const Memorize = () => {

    const { counter, increment } = useCounter( 10 );
    const { counter:counter2, increment:increment2 } = useCounter( 20 );

    const [ show, setShow ] = useState( true );

  return (
    <>
      <h1>Counter: <Small value={ counter }/> </h1>
      <hr />
      <h1>Counter2: <Small value={ counter2 }/> </h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={ () => increment()}
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary ms-2"
        onClick={ ()=>setShow( !show ) }
      >
        Show/Hide { JSON.stringify(show) }
      </button>

      <button
        className="btn btn-primary ms-2"
        onClick={ () => increment2()}
      >
        +1
      </button>
    </>
  )
}
