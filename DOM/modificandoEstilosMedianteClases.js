/*
    Modificar estilos CSS mediante clases
*/
const primeraCaja = document.querySelector('#contenedor1 .caja');
console.log(primeraCaja);

// classList.add() - Agrega una clase
const agregarClase = () => {
    primeraCaja.classList.add('nueva-clase');
}
// classList.remove() - Quita una clase
const eliminarClase = () => {
    primeraCaja.classList.remove('nueva-clase');
}
// classList.toggle() - Quita o agrega una clase
const toggleClase = () => {
    primeraCaja.classList.toggle('nueva-clase');
}
// classList.contains() - Comprueba si una clase existe
const comprobarClase = () => {
    if(primeraCaja.classList.contains('nueva-clase')) {
        console.log('La clase nueva-clase existe');
    } else {
        console.log('La clase nueva-clase no existe');
    }
    
    console.log('y contiene las siguientes clases: ');
    primeraCaja.classList.forEach((clase) => console.log(clase));
}

