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
    let promedio = nums[0];
    for(let i=0; i<nums.length; i++){
         promedio += nums[i];
}
return promedio / nums.length
}

    console.log(promedio([10,30,45]), "Promedio");

// Ejercicio / Unión

function union(arr1,arr2){
    return [...arr1,...arr2];
}

console.log(union([2,3,4,],[7,8,9]));

// // Ejercicio / Intercesión

function intercesion(a1,a2){
    let enComun = [0];
    for (let i=0; i<a1.length; i++){
        for (let z=1; z<a2.length; z++){
           return enComun = a1[i] == a2[z]
        }
    }
}
console.log(intercesion([2,3,4],[5,8,3]),"Número en común");

// Ejercicio / Remplazo

// Ejercicio / Repetido 

function repetido(arrayRep){
    let x = [0];
    for (let m=0; m<arrayRep.length; m++){
        console.log("voybien")
        for(let k=1; k<arrayRep.length; k++){
            if (arrayRep[m] === arrayRep[k]){
                x = arrayRep[m];
                return x;
            }else{
                x = -1;
            }
        } 
    }
}
console.log(repetido([1,5,7,3,6,5,2]),"Número Duplicado");

//// Extras / Ejercicio / Multiplicar
// 1.- Escribe una función que reciba como parámetro un arreglo de números y 
// regrese un nuevo arreglo con cada uno de los elementos multiplicados por dos. 

//     const array =  [1,2,3,4,5]; 
//     const a = mult2(array); 
    // a = [2,4,6,8,10] 

    // function nuevoMul(a1)