const Persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip:'454314',
        lat:'123456',
        lng:'0154645',
    }
}
console.log({Persona});

const Persona2 = {...Persona};//clonar un obgeto
Persona2.nombre = 'peter';

console.log(Persona2);
