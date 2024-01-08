/*
    window.setTimeout()
    Nos permite ejecutar una funcion despues de cierto tiempo.
*/
// Forma1
setTimeout(() => {
    console.log('Primera forma');
},5000);

// Forma2
const saludo = () => {
    console.log('Segunda forma');
}

setTimeout(saludo, 5000)


/*
    Iniciar cuando lo indiquemos por ejemplo 
    al pulsar un botón
*/
const saludo2 = () => {
    console.log('Empieza despues de pulsar el boton');
}
let id;
const iniciar = () => {
    console.log('Iniciando...');
    id = setTimeout(saludo2, 10000)
}

/*
    Función para poder detener un timer.

*/
const parar = () => {
    console.log('Deteniendo...');
    clearTimeout(id);
}

