//forma de promesa
const getImagenPromesa = () =>{
    return new Promise((resolve, reject) => {
        resolve('https://primera-prueba-de-firebase.web.app/');
    });
};

getImagenPromesa().then( console.log );

//forma asyncrona, es lo mismo pero mas bonito
const getImage = async() => {
    try {
        const apiKey = '9wUq1JOVZZ8WSZ4qLdFue5yw9gS0y8T9';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
        
    } catch (error) {
        console.error('Error: ',error);
    }
};

getImage();






// peticion //forma mas bonita, promesas en cadena
//     .then( resp => resp.json())
//     .then( ({ data }) => {
//         console.log( data.images.original );
//         const { url } = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append( img );
//     })
//     .catch( console.warn );

