/*1.- Escribe una función que reciba como parámetro un arreglo de números y 
regrese un nuevo arreglo con cada uno de los elementos multiplicados por dos.*/
const array =[];
function multiplicados(array){
    var size = array.length;
    let copy = [];
    for(i=0; i<size; i++){
        a = array.shift();
        let multi = a *2;
        copy.push(multi);
    }
    console.log(copy);
}
//multiplicados([1,2,5,1,8,9]);

/*2.- Escribe una función que reciba como parámetro un arreglo de números sume todos
y regrese si la suma de los elementos es un número par. */
function par(array){
    let rest = 0;
    var size = array.length;
    for(i=0; i<size; i++){
    rest = rest + array[i];
    };
    if(rest%2==0){
        console.log("La suma es par");
    }
    else
    console.log("La suma no es par");
}
//par([1,2,3,5]);

/*3.- Escribe un función que reciba como parámetro un arreglo de números y un número A. 
Debe regresar las veces que se encuentra el número A en el arreglo. */
let A = undefined;
let contador = 0;
function encontrar(A, array){
    var size = array.length;
    for(i=0; i<size; i++){
        if(array[i] == A){
           contador = contador + 1;
        }  
    }
console.log("El " + A + " aparece " + contador + " veces en el array")
}
//encontrar(1, [1,2,5,8,21,3,1,1]);

/*4.- Escribe una función que reciba como parámetro un arreglo de números y un número A.
Debe regresar el primer indice del arreglo donde se encuentre el número A. Sino se encuetra el
número A en el arreglo debe regresar -1;*/

function primerindice(A, array){
    var size = array.length;
    let index = undefined;
    for(i=0; i<size; i++){
        if(array[i] == A){
            index = i;
            break;
        }
        else{
            index = -1;
        }
    }
    console.log(index);
}
//primerindice(1, [2,2,3,3,4,5]);

/*5.- Escribe una función que reciba como parámetro un arreglo de número y un número A.
La función debe regresar un nuevo arreglo con todos los elementos del arreglo original
pero eliminando todos los elementos que sean igual al número A.*/

function filtro(A, array){
    var size = array.length;
    let copy = [];
    let index = undefined;
    for(i=0; i<size; i++){
        if(array[i] !== A){
            copy.push(array[i]);
        }

    }
    console.log(copy);
}
//filtro(1, [1,3,4,2,1,1]);


/*6.- Escribe una función que reciba como parámetro un arreglo de números y un número A.
La función debe regresar un 'boolean' true si el número A está en el arreglo y false si no está
en el arreglo.*/

function boolean(A, array){
    var size = array.length;
    i=0;
    while(i<size){
        if(array[i] == A){
           console.log(true);
           break;
        }
        if((i+1) == size){
            console.log(false);
        }
        i++;
    }
}
//boolean(1, [3,6,32,6]);

/*7.- Escribe una función que reciba como parámetro un arreglo de números.
La función debe regresar 'true' si todos los números del arreglo son iguales y false
si uno solo es diferente. */

function igual(array){
    i=1;
    var size = array.length;
    while(i<size){
        if(array[0] !== array[i]){
        console.log(false)
        break;
        }
        if((i+1) == size){
            console.log(true);
        }
        i++;
    }
}
//igual([1,1,1,1,2]);

/*8.- Escribe una función que reciba como parámetro un arreglo de números y regrese un
nuevo arreglo con unicamente los números pares.*/

function pares(array){
    var size = array.length;
    let copy = [];
    for(i=0; i<size; i++){
        if(array[i]%2 == 0){
            copy.push(array[i]);
        }
    }
    console.log(copy);
}
//pares([1,2,7,9,10,22,35,56,70])

/*9.- Escribe una función que reciba como parámetro un arreglo de números y regrese un
nuevo arreglo con unicamente los números impares.*/

function impares(array){
    var size = array.length;
    let copy = [];
    for(i=0; i<size; i++){
        if(array[i]%2 !== 0){
            copy.push(array[i]);
        }
    }
    console.log(copy);
}
//impares([1,2,3,4,5,7,32,65,211]);

/*10.- Escribe una función que reciba como parámetro un arreglo de números y regrese un
nuevo arreglo con todos los elementos del arreglo original excepto el primero y el ultimo.*/

function corte(array){
    var size = array.length;
    let copy = [];
    for(i=1; i<size-1; i++){
        copy.push(array[i]);
    }
    console.log(copy)
}
corte([1,2,3,4,5,6]);

