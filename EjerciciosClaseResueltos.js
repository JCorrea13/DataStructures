const array = [];


function res (suma){
    let rest = 0;
    for(i=0; i<4; i++){
    rest = rest + suma[i];
    };
    return rest;
};
//console.log(res([1, 2, 3, 4]));

//Ejercicio Reverse

function reverse(array){
    const copy = [...array];
    for(i=0; i < array.length; i++){
        console.log(copy.pop());
    }
    
}
//reverse([1,2,3,4]);
//Funcion Reversa
function reverse1(array){
    for(let i = array.length - 1; i >= 0; i--){
        console.log(array[i]);
    }
}

//reverse([1,2,3,4,5]);
//function maximo
function max(array){
    let maxnum = array[0];
    for(i = 0; i < array.length; i++){
        if(maxnum < array[i]){
            maxnum = array[i];
        }
    }
    console.log(maxnum);
}

//Funcion minimo
function min(array){
    let minum = array[0];
    for(i = 0; i < array.length; i++){
        if(minum > array[i]){
            minum = array[i];
        }
    }
    console.log(minum);
}

//min([5,166,18,122, 4])

//Ejercicio Concatenar
var rest = "";
function concatenar (array){
    for(i=0; i<4; i++){
    rest = rest + array[i];
    };
    return rest;
};
concatenar(["Hola", " ", "Mundo", "!"])
//console.log (rest);

//Ejercicio Promedio


function promedio (array){
    let rest = 0;
    for(i=0; i <array.length; i++){
    rest = rest + array[i];
    };
    let prmd = rest/array.length;
    console.log(prmd);
    return rest;
};
//promedio([1,2,3,6]);
//Ejercicio Union
const array2 = [];
function union(array, array2){
    let array3 = [...array, ...array2];
    console.log(array3);
}
//union([1,2,3], [4,5,6]);

//Intersecion
function intersecion (array, array2){
    var array3 = [];
    for (i=0; i<array.length; i++){
        for(j=0; j<array2.length; j++){
            if(array[i] == array2[j]){
                array3.push(array2[j]);
            }
        }
    }
   for(i=0; i<array3.length; i++){
        if(array3[i] == array3[i+1]){
            array3.splice(i+1, 1);
        }
    }
console.log(array3)
}
//intersecion([1, 2, 3, 3, 4, 7, 9], [3, 1, 9]);


//Replace

function reemplazar (array){
    const copy = [...array];
    const valor = -1
    for (i=0; i<array.length; i++){
        if(copy[i] == 0)
        copy[i] = valor;
    }
    console.log(copy);
}

//reemplazar([1,2,3,0,0,4,0]);

//Repetido

function repetido(array){
    let copy = [...array];
    let notfound = -1;
    for(i=0; i<array.length; i++){
        let found = array[i+1]
        if(array[i] == array[i+1]){
            console.log(found)
            break;
        }
        if(i+1 == array.length){
        console.log(notfound)
        }
    }
}
repetido([1,2,3,4,6,8]);
