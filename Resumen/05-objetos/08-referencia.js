let a = 1;
let b = a;
b++;
console.log( a, b ); // 1 y 2

let obja = {};
let objb = obja;
objb.prop = 1;
console.log( obja, objb ); // { prop: 1 } y { prop: 1 }


let c = 1;
function suma(n){
    n++;
}
suma(c);
console.log(c); // 1


let d = {prop: 1};
function suma2(n){
    n.prop++;
}
suma2(d);
console.log(d); // { prop: 2 }

