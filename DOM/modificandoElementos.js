/*
    elemento.innerHTML
    Nos permite cambiar el contenido de etiquetas HTML de un elemento
*/
const primeraCaja = document.querySelector('.caja');
primeraCaja.innerHTML = '<b>Hola</b>';

/*
    elemento.attribute
    Nos permite acceder y cambiar los atributos de un elemento
*/
primeraCaja.id = 'nuevo_id'; // en el inspector de elementos podrá verse el nuevo atributo

/*
    elemento.setAttribute()
    Nos permite agregar o establecer el valor de un atributo del elemento
*/
primeraCaja.setAttribute('class','caja activa');
primeraCaja.setAttribute('data-id','123-456-789');

/*
    elemento.style.property
    Nos permite cambiar los estilos CSS de un elemento
*/
const contenedor2Caja1 = document.querySelector('#contenedor2 .caja');
contenedor2Caja1.style.background = '#000';
contenedor2Caja1.style.color = '#fff';
contenedor2Caja1.style.textTransform = 'uppercase';