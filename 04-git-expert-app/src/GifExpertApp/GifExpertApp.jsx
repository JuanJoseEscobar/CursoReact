import { useState } from "react";
import { AddCategory, GifGrid } from "./Components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One punch', 'Dragon Boll']);

  const onNewCategory = ( newCategory )=>{

    if ( categories.includes(newCategory) ) return;//mejorar***

    setCategories([ newCategory, ...categories ]);

  }

  return (
    <>
      {/*titulo*/}
      <h1>GifExpertApp</h1>
      {/*Input*/}
      <AddCategory
        onNewCategory={ onNewCategory }
      />
      {/*Listado de gifs*/}
      <ol>
        {
          categories.map( category =>(
            <GifGrid key={category} category={category} />
          ))
        }
      </ol>
      {/*Gif item*/}
    </>
  );
};
