
const apiKey = '9wUq1JOVZZ8WSZ4qLdFue5yw9gS0y8T9';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);


/* 
peticion.then( resp => { //forma larga de hacerlo y fea
    resp.json().then( data => {
        console.log( data );
    })
})
.catch( console.warn );
*/

peticion //forma mas bonita, promesas en cadena
    .then( resp => resp.json())
    .then( ({ data }) => {
        console.log( data.images.original );
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch( console.warn );