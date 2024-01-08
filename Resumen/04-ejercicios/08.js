let array = [{
    id: 1,
    name: 'John',
}, {
    id: 2,
    name: 'Bill',
}, {
    id: 3,
    name: 'Alex',
}];

function toPairs(arr) {
    let pairs = [];
    for(idx in arr){
        pairs[idx] = [arr[idx].id, arr[idx].name];
    }
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);

