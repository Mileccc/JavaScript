/*
    Named Imports
*/

import {nombre as nombreImportado, obtenerPosts} from './namedExport';  

console.log('Mi nombre es: ' + nombreImportado);
console.log(obtenerPosts());


/*
    Namespace Imports
*/
import * as datos from './namedExport';

console.log(datos.nombre);
console.log(datos.obtenerPosts());  


/*
    Default Imports
*/
import cualquierNombre from './defaultExport';
console.log(cualquierNombre());


/*
    Empty Imports
    Carga todo el código pero sin hacer ningun objeto.
*/ 

import './emptyExport';