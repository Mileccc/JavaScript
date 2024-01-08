let obj = {}; // atajo para llamar al constructor Objectos
let obj2 = new Object();

/**
 * neq Array(); []
 * new String(); ""  ''  ``
 * new Number();  12
 * new Boolean(); true false
 */

function Usuario(){
    this.name = 'Nicolas';
}

let user = new Usuario();
console.log(user.constructor);