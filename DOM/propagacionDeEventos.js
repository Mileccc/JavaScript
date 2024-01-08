const contenedor = document.getElementById('contenedor1');

// El evento en el padre se propaga a los hijos
contenedor.addEventListener('click', (e) => {
    console.log('Has hecho click en el contenedor');
})


// Detener propagación en la primera caja
const primeraCaja = document.querySelector('.caja');
primeraCaja.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Has hecho click en la primera caja');
})