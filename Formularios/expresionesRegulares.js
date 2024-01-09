/*
    Expresiones Regulares (RegEx) dentro de formularios
    Podemos usar expresiones regulares para validar los campos de una forma más precisa
*/
const formulario = document.getElementById('formulario-donacion');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = {correo: formulario.correo.value};
    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    // Comprobamos el correo con RegEx
    if(!expresionRegular.test(datos.correo)){
        console.log('El correo es incorrecto');
        return;
    }

    console.log(`Correo: ${datos.correo}`);
    console.log('Enviando datos...');
});