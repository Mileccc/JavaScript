const crearCookie = () => {
    document.cookie = 'nombre=carlos; expires=8 Jan 2024 00:00:00 UTC';
}

/*
    Forma añadir un usuario a las cookies por medio de prompt
*/
const iniciarSesion = () => {
    const usuario = prompt('¿Cuál es tu nombre?');
    document.cookie = `nombre=${usuario}; expires=8 Jan 2024 00:00:00 UTC`;
    alert('Sesion iniciada');
}



/*
    Form para obtener el usuario de las cookies
*/
let usuario;
const cookies = document.cookie.split(';');

cookies.forEach((cookie) => {
    const propiedad = cookie.split('=')[0];
    if (propiedad === 'nombre') {
        usuario = cookie.split('=')[1];
    }
});

if(usuario){
    console.log(`Bienvenido ${usuario}`);
}else{
    console.log('No hay usuarios');
}

// Cerrar sesion y eliminar cookie
const cerrarSesion = () => {
    document.cookie = 'nombre=; expires=1 Jan 2020 01:00:00 UTC'; //Usuario o nombre y fecha pasada
    console.log('Usuario cerrado');
}