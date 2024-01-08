let animales = ['chanchito', 'caballo']; // Respeta el orden

console.log (animales);
console.log(animales[0]);

animales[2] = 'perro'; // Agrega un elemento de forma dinámica

console.log(animales);

animales[10] = 'gato'; // Agrega un elemento y deja posiciones vacías

console.log(animales[7]); // Devolveria undefined
console.log(typeof animales); // Devolveria object

animales.length; // Cantidad de elementos