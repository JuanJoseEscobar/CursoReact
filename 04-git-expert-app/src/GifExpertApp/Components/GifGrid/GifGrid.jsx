import { CardGif } from "./CardGif/CardGif";
import { useFetchGifs } from "./useFetchGifs";

export const GifGrid = ({ category }) => {

  const { images, isLoading} = useFetchGifs( category );//hook personalizado

  /* todo este codigo se pudo transformar en un custom hook */
  // const [images, setImages] = useState([]);

  // const getImages = async()=>{
  //   const newImages = await getGifs( category );
  //   setImages( newImages );
  // }
  
  // useEffect(()=>{
  //   getImages();
  // },[]);


  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && ( <h2 >Cargando...</h2> )//and logico
      }
      
      <div className="card-grid">
        {
          images.map(( image )=>(
            <CardGif 
              key={image.id} 
              { ...image }//esparcir las props
            />
          ))
        }
      </div>
    </>
  );
};
