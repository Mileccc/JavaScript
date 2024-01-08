/*
    getElementById()
    Nos permite obtener un elemento por su ID.
*/
const contenedor1 = document.getElementById('contenedor1');
console.log(contenedor1);

/*
    children
    Nos permite obtener todos los elementos dentro de un elemento.
*/
console.log(contenedor1.children);

/*
    parentElement
    Nos permite obtener el elemento padre de un elemento.
*/
console.log(contenedor1.parentElement);

/*
    getElementsByTagName()
    Nos permite obtener una colección de elementos por su etiqueta.
    Nota: Devuelve una colección HTML. Una colección no es un arreglo.
*/
const divs = document.getElementsByTagName('div');
console.log(divs);
console.log(`Tenemos ${divs.length} divs en la pagina`);

/*
    getElementsByClassName()    
    Nos permite obtener una colección de elementos por su clase CSS.
    Nota: Devuelve una colección HTML. Una colección no es un arreglo.
*/
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

/*
    querySelector()
    Nos devuelve el primer elemento que coincide con el selector CSS.
    Nota: Devuelve un nodelist.
*/
const caja = document.querySelector('#contenedor1 .caja');
console.log(caja);

/*
    querySelectorAll()
    Nos devuelve todos los elementos que coinciden con el selector CSS.
    Nota: Devuelve un nodelist.
*/
const cajas = document.querySelectorAll('#contenedor1 .caja');
console.log(cajas);
// Al ser un nodolist podemos recorrerlo con forEach
cajas.forEach((caja) => console.log(caja));

/*
    closest()
    Nos permite buscar de adentro hacia afuera en busca de un elemento.
*/
const ultimaCaja = document.querySelector('.caja:last-child');
console.log(ultimaCaja);
console.log(ultimaCaja.closest('.contenedor-principal')); 

/*
    Podemos encadenar todos los métodos para obtener elementos.
*/
const contenedor2 = document.getElementById('contenedor2');
console.log(contenedor2.querySelector('.caja'));