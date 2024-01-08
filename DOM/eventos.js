const boton1 = document.getElementById('boton1');
const primeraCaja = document.querySelector('#contenedor1 .caja');

boton1.addEventListener('click', (e) => {
    primeraCaja.classList.toggle('activa');
});

/*
    Agregando el evento a multiples elementos
    Podemos agregar el evento a multiples elementos recorriendolos mediante un ciclo.
    Nota: Esta no es la forma más optima, en la proxima clase veremos una mejor forma.
*/
const cajas = document.querySelectorAll('.caja');

cajas.forEach((caja) => {
    caja.addEventListener('click', (e) => {
        console.log(`Has echo click en la caja: ${e.target.innerHTML}`);
    })
})