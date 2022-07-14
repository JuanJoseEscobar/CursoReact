import { useRef, useLayoutEffect, useState } from "react";


export const Quote = ({ author, quote }) => {

  const pRef = useRef();

  const [boxZise, setBoxZise] = useState({ width:0, height:0 })

  useLayoutEffect(() => {
    console.log( pRef.current.getBoundingClientRect() );
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxZise({
      width,
      height
    })
  }, [quote])

  return (
    <>
      <blockquote
        className="blockquote text-end"
        style={{ display: 'flex' }}
      >
          <p className="mb-1" ref={pRef}>{author}</p>
          <footer className="blockquote-footer"> {quote} </footer>
      </blockquote>

      <code>{JSON.stringify( boxZise )}</code>
    </>
  )
}
