// Ejercicio / Max

const array = [1,54,23,12];

function max(array){
     let maxNum = array[0];
    for(let i=0; i<array.length; i++){
    if (maxNum < array[i])
         maxNum = array[i];
     }
     return maxNum;
 }
    console.log(max(array), "Número Max");

// Ejercicio / Minimo

const a = [5,23,17,2];

function min(a){
     let minNum = a[0];
    for(let i=0; i<a.length; i++){
    if (minNum > a[i])
         minNum = a[i];
     }
     return minNum;
 }
    console.log(min(a), "Número Min");

// Ejercicio / Concatenar

function conca(arr1){
    let frase = [];
   for(let i=0; i<arr1.length; i++){
       frase += arr1[i];
   }
   return frase;
}
console.log(conca(["Hola ","mundo"," !"]));

// Ejercicio / Promedio

function promedio(nums){
    let promedio = [];
    for(let i=0; i<nums.length; i++){
         promedio += nums[i];
}
return promedio / nums.length
}

    console.log(promedio([10,20,30,40]), "Promedio");

// Ejercicio / Unión

function union(arr1,arr2){
    let arr3 =[...arr1,...arr2];
    return arr3;
}

console.log(union([2,3,4,],[7,8,9]),"Array unido");

// // // Ejercicio / Intercesión

// function intercesion(a1,a2){
//     let enComun = [];
//     for (let i=0; a1.length; i++){
//         for (let )
//     }
// }
