
  
  let array = [2, 5, 7, 15, -5, -100, 55];

  let arrayOrdenado = array.sort(function(a, b){return a - b}); // Menor a mayor . Si el resultado de la resta es positivo significa que el primer elemento es mayor que el segundo
  console.log(arrayOrdenado); // El array ordenado estará en la variable "array"
  