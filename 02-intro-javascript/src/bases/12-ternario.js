
const activo = true;

//forma comun
// let mensaje = '';

// if (activo) {
//     mensaje = 'activo';
// } else {
//     mensaje = 'inactivo';
// }

//operador ternario
// const mensaje = ( activo ) ? 'Activo' : 'Inactivo';
const mensaje = !activo && 'Activo';//forma corta del if.

console.log( mensaje );