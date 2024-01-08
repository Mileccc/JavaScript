/*
    Modificar estilos CSS mediante "inline styles".
*/
const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
ultimaCaja.style.background = '#000';
ultimaCaja.style.color = '#fff';

const cajas = document.querySelectorAll('.caja');
let tamaño = 24;

const incrementarFuente = () => {
    cajas.forEach((caja) => {
        caja.style.fontSize = `${++tamaño}px`;
    
    });
};

const disminuirFuente = () => {
    cajas.forEach((caja) => {
        caja.style.fontSize = `${--tamaño}px`;
    
    });
}