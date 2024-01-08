/*
    window.setInterval()
    Nos permite ejecutar una funcion cada cierto tiempo.
*/
let cuenta = 0;
let id;
const iniciar = () => {
    console.log('Iniciando...');
    id = setInterval(() => {
        console.log(cuenta);
        cuenta++;
    },1000);
}

/*
    window.clearInterval()
    Para detener un setInterval.
*/
const parar = () => {
    console.log('Deteniendo...');
    clearInterval(id);
}

