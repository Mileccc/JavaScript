/*
    Alerta Regular
    Para informarle al usuario algo
*/
// alert('Hola usuario');

/*
    Ventana de confirmación
    Una ventana donde el usuario puede aceptar o cancelar.
    Retorna verdadero o falso dependiendo de la respuesta del usuario.
*/

const ingresar = () => {
    const accesoPermitido = confirm('¿Eres mayor de edad?');
    if(accesoPermitido){
        alert('Acceso permitido');
    }else{
        alert('Acceso denegado');
    }

};

/*
    Ventana con input
    Una ventana donde el usuario puede introducir un valor.
    Retorna una cadena de texto con la respuesta del usuario.
*/
const saludar = () => {
    const nombre = prompt('¿Cuál es tu nombre?');
    alert(`Hola ${nombre}`);
}

