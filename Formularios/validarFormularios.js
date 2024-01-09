const formulario = document.getElementById('formulario-donacion');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const datos = {
        correo: formulario.correo.value, 
        pais: formulario.pais.value,
        donacion: formulario.donacion.value,
        fecha: formulario.fecha.value,
        terminos: formulario['terminos-y-condiciones'].checked
    };


 

    // Comprobamos que el correo tenga más de 2 caracteres             
    if(datos.correo.length <= 2){
        console.log('El correo es incorrecto');
        return;
    }

    // Comprobamos que se seleccione un pais
    if(datos.pais === ""){
        console.log('Se debe seleccionar un pais');
        return;
    }

    // Comprobamos que se seleccione una donación
    if(datos.donacion === ""){
        console.log('Se debe seleccionar una donación');
        return;
    }

    // Comprobamos que se seleccione una fecha
    if(datos.fecha === ""){
        console.log('Se debe seleccionar una fecha');
        return;
    }

    // Comprobamos que se aceptaron los terminos
    if(!datos.terminos){
        console.log('Se debe aceptar los terminos');
        return;
    }

    console.log(datos);
    console.log(`
    - Correo: ${datos.correo} 
    - Pais: ${datos.pais} 
    - Donación: ${datos.donacion} 
    - Fecha: ${datos.fecha}
    - Terminos: ${datos.terminos}`);

});