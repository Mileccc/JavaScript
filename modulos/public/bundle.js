'use strict';

const nombre = 'Carlos';

const obtenerPosts = () => {
    return ['Post1', 'Post2', 'Post3'];
};

// FORMA 1
/*
export default () => {
    return {
        nombre: 'Carlos',
        email: 'correo@correo.com',
    };
};
*/

// FORMA 2

const obtenerUsuario = () => {
    return {
        nombre: 'Carlos',
        email: 'correo@correo.com',
    };
};

console.log('Soy código que se ejecuta desde el archivo emptyExport.js');

/*
    Named Imports
*/


console.log('Mi nombre es: ' + nombre);
console.log(obtenerPosts());

console.log(nombre);
console.log(obtenerPosts());  
console.log(obtenerUsuario());
