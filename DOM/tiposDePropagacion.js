const contenedor = document.getElementById('contenedor1');

// El evento en el padre se propaga a los hijos
contenedor.addEventListener('click', (e) => {
    console.log('Has hecho click en el contenedor');
}, true)
/* 
    Bubbling (false, por defecto)
    En bubbling el evento del elemento hijo reacciona primero y despues el evento del elemento padre
    Capturing (true)
    En capturing el evento del elemento padre reacciona primero y despues el evento del elemento hijo
*/
const primeraCaja = document.querySelector('.caja');
primeraCaja.addEventListener('click', (e) => {
    console.log('Has hecho click en la primera caja');
});
