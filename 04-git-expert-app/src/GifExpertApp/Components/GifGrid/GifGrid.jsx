import { useState, useEffect } from "react";
import getGifs from "../../Helpers/getGifs";

const GifGrid = ({ category }) => {
  const [counter, setCounter] = useState(10);
  
  useEffect(()=>{
    getGifs(category);
  },[]);


  return (
    <>
      <h3>{category}</h3>
      <h5>{ counter }</h5>
      <button onClick={ ()=>setCounter(counter+1)}>+1</button>
    </>
  );
};

export default GifGrid;
