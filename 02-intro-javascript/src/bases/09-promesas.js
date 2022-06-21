import { getHeroById } from "./bases/08-Import-export";

/* const promesa = new Promise( ( resolve, reject ) => {
    setTimeout(() => {
        
        const p1 = getHeroById(2);
        resolve( p1 );
        reject( 'no se pudo encontar el heroe' );
    }, 2000);
});

promesa.then( ( heroe ) => {
    console.log('heroe',heroe);
})
.catch( (err) => {
    console.warn(err);
}); */


const getHeroByIdAsync = ( id ) =>{
    return new Promise( ( resolve, reject ) =>{
        setTimeout(() => {
            const p1 = getHeroById(id);
            if ( p1 ) {
                resolve( p1 );
            }else
            {
                reject( 'No se escontro el heroe' )
            }
        }, 2000);
    })
};

getHeroByIdAsync(4).then( heroe => {
    console.log( 'Heroe',heroe );
}).catch( console.warn );