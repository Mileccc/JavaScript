const agregarCaja = () => {
/*
    1. Creamos el elemento
    createElemnt - Recibe como parametro una cadena de texto con la etiqueta que queremos crear.
*/
const nuevaCaja = document.createElement('div');

/*
    2. Agregamos texto y atributos
*/
nuevaCaja.innerText = 'Nueva Caja!';
// nuevaCaja.setAttribute('id', 'nuevo-id');
nuevaCaja.setAttribute('class', 'caja activa');

/*
    3. Agregamos el elemento al DOM
*/
const contenedor = document.getElementById('contenedor1');

// .appendChild() - Agrega un elemento al final
// contenedor.appendChild(nuevaCaja);

// .prepend() - Agrega un elemento al principio
// contenedor.prepend(nuevaCaja);

/*
    .insertAdjacentElement() - Nos permite agregar un elemnto en distintas posiciones.
    Valores:
        afterbegin - como primer elemento
        beforebegin - antes del elemento padre
        beforeend - como último elemento
        afterend - despues del elemento padre
*/
// contenedor.insertAdjacentElement('afterbegin', nuevaCaja);

// .replaceWith() - Nos permite reemplaza un elemento por otro
document.querySelector('#contenedor1 .caja').replaceWith(nuevaCaja);

};



