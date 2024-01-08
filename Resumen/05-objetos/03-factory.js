
function crearUsuario(email, name){
    return {
        email,
        name,
        activo: true,
        recuperarClave: function(){
            console.log('Recuperando clave...');
        }
    }
}

let user1 = crearUsuario('Jhon@example.com', 'John');
let user2 = crearUsuario('Bill@example.com', 'Bill');
let user3 = crearUsuario('Alex@example.com', 'Alex');

console.log(user1, user2, user3);