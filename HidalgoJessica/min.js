//Escribe una función que acepte como parámetro un arreglo de enteros
//y regrese el número menor del arreglo
var a = [1,10,6,3,5]
function min (a) {
var min =Math.min(...a)
console.log(min)
}
console.log(min(a))