//Escribe una función que acepte como parámetro dos arreglos de enteros
//regrese la unión
var a = [1,2,3,4,5];
var b = [6,7,8,9,10];
var c= [];
function union (a,b){
    c= [...a,...b];
console.log(c)
}
console.log(union(a,b))

