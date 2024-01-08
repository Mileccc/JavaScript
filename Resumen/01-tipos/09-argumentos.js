function suma(a, b){ // Parametros
    return a + b;
}

console.log(suma(3, 5)); // Argumentos
console.log(typeof suma); // Devolverá tipo function

function arguments(){
    console.log(arguments);
}

arguments(1, 2, 3, 4, 5);
