function getbyIdx(arr, idx){
    if (arr.length === 0){
        return 'Array vacío'
    }else{
        let i = 0;
        for (let num of arr){
            
            if (num === idx){
                return i;
            }
            i++
        }
        return 'No encontrado';
    }

}

let resultado = getbyIdx([1,2], 2);
console.log(resultado);