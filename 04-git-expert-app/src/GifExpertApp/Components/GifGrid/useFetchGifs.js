import { useState, useEffect } from "react";
import getGifs from "../../Helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async()=>{
      const newImages = await getGifs( category );
      setImages( newImages );
      setIsLoading( false );
    }
  
    useEffect(()=>{
      getImages();
    },[]);

  return {
    //images:images, //se puede dejar sin la igualacion si tienen el mismo nombre
    images,
    isLoading,
  }
}
