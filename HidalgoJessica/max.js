//Escribe una función que acepte como parámetro
//un arreglo de enteros y regrse el número mayor del arreglo 

var a =[1,10,6,3,5];
function max(a){
var max = Math.max(...a);
console.log(max);
}
console.log(max(a))