let longitud = 7;

function crearArray(n) {
    if (n <= 0) {
        return [];
    }
    let array = [];
    for (let i = 0; i < n; i++) {
        // array.push(i + 1);
        array[i] = i + 1;
    }
    return array;


}

let resultado = crearArray(longitud);
console.log(resultado);