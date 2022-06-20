
const personajes = ['goku', 'vegeta', 'trunks'];

const [ p1 ] = personajes;
const [ , p2, p3 ] = personajes;

console.log( p1 );
console.log( p2 );
console.log( p3 );

const retornaArreglo = () => {
    return ['ADC', 252525];
};

const [ letras, numeros ] = retornaArreglo();
console.log( letras, numeros );

//tarea
const usuario = ( valor ) => {
    return [ valor, () => { console.log('Hola Mundo') } ];
};

const [nombre, setNombre] = usuario( 'Astro' );

console.log( nombre );
setNombre();
