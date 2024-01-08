const user = {id: 1};

user.name = 'Nicolas';
user.guardar = function() {
    console.log('Guardado', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;

console.log(user);

const user1 = Object.freeze({id: 2});
user1.name = 'Carlos';
user1.id = 4;
console.log(user1);

const user2 = Object.seal({id: 5});
user2.name = 'Juan';
user2.id = 3;
console.log(user2);

