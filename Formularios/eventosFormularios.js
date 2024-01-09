const formulario = document.forms['formulario-donacion'];
console.log(formulario);

/*
    Evento submit
    Nos permite detectar cuando el usuario intenta enviar un formulario.
*/

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Hay un evento submit en el formulario');
});

/*
    Evento Change
    Nos permite detectar cuando hay un cambio en el valor de un input, select o textarea.
    Se ejecuta 
*/formulario.pais.addEventListener('change', (e) => {
    console.log('El evento cambio:')
    console.log(e.target.value);
    
});

formulario['cantidad-5'].addEventListener('change', (e) => {console.log(`la cantidad cambio: `+ e.target.value)});
formulario['cantidad-10'].addEventListener('change', (e) => {console.log(`la cantidad cambio: `+ e.target.value)});

/*
    Evento Focus
    Nos permite detectar cuando un input recibe el foco de atención.
*/
formulario.correo.addEventListener('focus', (e) => {
    console.log('El correo recibio el foco');
});

/*
    Evento Blur
    Nos permite detectar cuando un input pierde el foco de atención.
*/
formulario.correo.addEventListener('blur', (e) => {
    console.log('El correo perdio el foco');
});

/*
    Evento Keydown
    Nos permite detectar cuando el usuario presiona una tecla.
*/
formulario.correo.addEventListener('keydown', (e) => {
    console.log(`La tecla presionada es: ${e.key}`);
});

/*
    Evento Keyup
    Nos permite detectar cuando el usuario deja de presionar una tecla.
*/
formulario.correo.addEventListener('keyup', (e) => {
    console.log(`La tecla presionada es: ${e.key}`);
});
/*
    Evento Keypress
    Nos permite detectar cuando el usuario presiona una tecla sin dejar de presionarla.
*/
formulario.correo.addEventListener('keypress', (e) => {
    console.log(`La tecla presionada es: ${e.key}`);
});
