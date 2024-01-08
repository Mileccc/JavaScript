function nombreResolucion(ancho, alto){
/*
    let nombre =  ancho + 'x' + alto;
    switch(nombre){
        case '7680x4320':
            return '8K';
        case '3840x2160':
            return '4K';
        case '2560x1440':
            return 'WQHD';
        case '1920x1080':
            return 'FHD';
        case '1366x768':
            return 'HD';
        default:
            return 'Resolución desconocida';

    }
*/
if (ancho >= 7680 && alto >= 4320) {
    return '8K';
} else if (ancho >= 3840 && alto >= 2160) {
    return '4K';
} else if (ancho >= 2560 && alto >= 1440) {
    return 'WQHD';
} else if (ancho >= 1920 && alto >= 1080) {
    return 'FHD';
} else if (ancho >= 1366 && alto >= 768) {
    return 'HD';
} else {
    return 'Resolución desconocida';
}



}

let nombre = nombreResolucion(1366, 768);
console.log(nombre);