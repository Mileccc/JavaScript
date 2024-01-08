// short-circuit

// *** Falso(Falsy) ***
// False
// 0
// ""
// null
// undefined
// NaN

let nombre = ''; // Falsy
let username = nombre || 'Jhon Doe'; // Falsy | True
console.log(username); // Devuelve 'Jhon Doe'

nombre = 'Carlos';
username = nombre || 'Jhon Doe';
console.log(username); // Devuelve 'Carlos'

function fn1(){
    console.log('Soy función 1');
    return true;
}

function fn2(){
    console.log('Soy función 2');
    return true;
}

let x = fn1() && fn2(); 
// Devuelve 'Soy función 1'
// Devuelve 'Soy función 2'

function fn1(){
    console.log('Soy función 1');
    return false;
}

function fn2(){
    console.log('Soy función 2');
    return true;
}
// De esta forma muestra 'Soy función 1' y no avanza a 'Soy función 2'