//Desestructuracion
//Asignacion desestructurante

const persona = {
    nombre:'Tony',
    edad: 45,
    clave: 'iroman',
    rango: 'capo',
}


console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave );

//renombre
const {nombre:personaNombre} = persona;
console.log( personaNombre );

const {nombre,  edad, clave} = persona;//no importa el orden con que se llame,
console.log( nombre, edad, clave );

//en una funcion
const printPersona = ({ nombre, edad, rango = 'capitan' })=>{//si el rango existe extraigalo si no, asignelo
    console.log( nombre , edad, rango);
};

printPersona( persona );


//extracion de objetos anidados
const userContext = ({ clave, nombre, edad})=>{//si el rango existe extraigalo si no, asignelo
    return{
        nombreClave: clave,
        anions: edad,
        latlng:{
            lat: -124654,
            lng: 546216,
        },
    };
};

const { nombreClave, anions, latlng:{ lat , lng} } = userContext( persona );
console.log( nombreClave, anions );
console.log( lat, lng );