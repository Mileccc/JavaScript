// console.log(window);

// window.alert('Hola Mundo');

console.log(`La ventana de tu navegador mide ${window.outerWidth} x ${window.outerHeight}`);

/*
    - 1er parametro: Dirección de la nueva ventana
    - 2do parametro: Nombre de la nueva ventana
    - 3er parametro: Cadena de texto de opciones
*/
let ventana;
const abrirVentana = () => {
    ventana = window.open('', 'Nueva Ventana', 'width=300, height=300');
    ventana.document.write('<h1>Hola, escribiendo en la nueva ventana</h1>');
}

const cerrarVentana = () => {
    ventana.close();
}

/*
    Screen
    Representa la pantalla del usuario
*/

console.log('Ancho de pantalla:', window.screen.width, 'alto de pantalla:', window.screen.height);
console.log('Ancho de pantalla disponible:', window.screen.availWidth, 'alto de pantalla disponible:', window.screen.availHeight);