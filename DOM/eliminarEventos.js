const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const primeraCaja = document.querySelector('.caja');


// Agregar evento EventListener despues de otro evento
const toogleClase = () => {
    primeraCaja.classList.toggle('activa'); 
};

boton1.addEventListener('click', () => {
    primeraCaja.addEventListener('click', toogleClase);
});

// Eliminar evento EventListener
boton2.addEventListener('click', () => {
    primeraCaja.removeEventListener('click', toogleClase);
});