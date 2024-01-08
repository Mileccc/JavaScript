function cualEsMayor(a, b) {
    if(a>b){
        return a;
    }else if(b>a){
        return b;
    }else{
        return 'Son iguales';
    }

}

let mayor = cualEsMayor(10, 5);

console.log(mayor);