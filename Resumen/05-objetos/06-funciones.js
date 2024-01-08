function Usuario(nombre){
    this.nombre = nombre;
}

console.log(Usuario.name); // Nombre de la clase
console.log(Usuario.length); // Cantidad de argumentos

// Asignar una clase
const U = Usuario

let user = new U('Nicolas');

console.log(user);

// Pasar funciones como argumento
function of(Fn, arg){
    return new Fn(arg);
}

let user1 = of(Usuario, 'Nicolas');
console.log(user1);

// Retornar funciones
function returned(){
    return function(){
        console.log('Hola Mundo');
    }
}

let saludo = returned();

saludo();