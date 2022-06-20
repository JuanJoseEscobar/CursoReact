//funciones en JS 
function saludar(nombre) {//no se deve hacer
    return `Hola, ${ nombre }`;
};

const saludo = function (nombre) {//se puede hacer mejor asi
    return `Hola, ${ nombre }`;
};

//saludar = 20;  //no daña el codigo porque uno es el nombre de la funcion y este es el nombre de una variable
//saludo = 40; //daña el codigo porque ya esta definido como una funcion

console.log( saludar );
console.log( saludar('Astro') );
console.log( saludo('Haluca') );

//funcion flecha
const saludoFlecha = ( nombre )=>{
    return `Hola, ${ nombre }`;
};

const saludoFlecha2 = ( nombre ) => `Hola, ${ nombre }`;


console.log( saludoFlecha('Jinx') );
console.log( saludoFlecha2('Toga') );


const getUser = () => {
    return{
        uid: 'A252525',
        userName: 'Astro',
    }
};
const getUser2 = () => ({
    uid: 'B252525',
    userName: 'Astrit',
});

console.log( getUser() );
console.log( getUser2() );

//tarea

/* function getUsuarioActivo( nombre ){
    return{
        uid: 'A252525',
        userName: 'Astro',
    }
}; */

const getUsuarioActivo = ( nombre ) => ({
    uid: 'A252525',
    userName: nombre,
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );