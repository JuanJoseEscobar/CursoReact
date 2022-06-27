//import  heroes, { owners }  from './data/heroes';//exportacion defcto y adicinal
import { heroes }  from '../data/heroes';

//console.table(heroes);
//console.table(owners);

/* const getHeroById = (id) => {
    return heroes.find( ( hero ) => hero.id === id );//busqueda con el find
} */
const getHeroById = (id) => heroes.find( ( hero ) => hero.id === id );//busqueda con el find

//console.log(getHeroById(2));

const getHeroByOwner = (owner) => {
    return heroes.filter( ( hero ) => hero.owner === owner );//busqueda con el filtrado
}

//console.log(getHeroByOwner('DC'));

export{
    //getHeroById as default,
    getHeroById,
    getHeroByOwner,
}