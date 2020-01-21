//Escribe una función que acepte como parámetro un arreglo de enteros y regrese la suma de todos los números en el 

const a = [1,2,3,4,5];
let x = 0;
function sum (a){
for (let i=0;i<a.length;i++){
    x = x + a[i]
 
}
return x  
}
console.log(sum(a))
