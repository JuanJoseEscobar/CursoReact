const nombre = 'fernando';
const apellido = 'Herrera';

//const nombreCompleto = nombre + ''+apllido;
const nombreCompleto = `
${nombre} 
${apellido}
${1+1}
`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola Mundo ' + nombre;
}

console.log(`este es un texto: ${getSaludo(nombre)}  `);