//Escribe una función que acepte como parámetro un arreglo de enteros e imprima los elementos en el orden al revés 

const a = [1,2,3,4,5];
function reverse(a){
for (let i=a.length-1;i>=0;i--){
   console.log(a[i]);  
}
}
console.log(reverse(a))