/*
    Formularios
    Tenemos dos formas de acceder a los formularios
    - Mediante el objeto forms
    - Mediante métodos del DOM
*/

// Opcion 1
// console.log(document.forms['formulario-donacion']['correo'].value);

// Opcion 2
// console.log(document.querySelector('#formulario-donacion #correo').value);

document.getElementById('btnEnviar').addEventListener('click', (e) => {
    e.preventDefault();    // Evita el comportamiento predeterminado de enviar el formulario por el action del form
    
    // Acceder a correo
    const correo = document.querySelector('#formulario-donacion [name="correo"]').value;
    console.log(correo);
    
    // Acceder al pais
    const selectPais = document.forms['formulario-donacion']['pais'].value;
    console.log(selectPais);

    // Acceder a monto de donación
    const formulario = document.forms['formulario-donacion'];
    console.log(formulario['donacion'].value);

    // Acceder a fecha
    console.log(formulario.fecha.value);

    // Acceder a terminos y condiciones
    console.log(formulario['terminos-y-condiciones'].checked);
});

