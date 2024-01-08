console.log(window.location);
console.log(window.location.href);
console.log(window.location.hostname);
console.log(window.location.pathname);
console.log(window.location.protocol);

// Redireccionar la página
const cargarDocumento = () => {
        location.assign('https://google.com');
}

const regresar = () => {
    history.back();
}

const irAdelante = () => {
    history.forward();
}

