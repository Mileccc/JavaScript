let user = {
    id : 1,
    name : 'John',
    age : 25,
}

for (let prop in user){
    console.log(prop, user[prop]);
}

let animales = ['chanchito', 'caballo', 'perro'];

for (let animal in animales){
    console.log(animal, animales[animal]);
}