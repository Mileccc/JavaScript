function precioCompleto(precio, impuesto){
    const resultado = precio * (impuesto +1);
    // return parseFloat(resultado.toFixed(2)); //redondea por abajo
    return Math.round(resultado * 100) / 100;   //Redondea al mas cercano

}

let resultado = precioCompleto(19.90, 0.15);
console.log(resultado);