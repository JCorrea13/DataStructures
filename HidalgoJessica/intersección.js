//Escribe una función que acepte como parámetro dos arreglos
//de enteros y regrese los elementos que tienen en común
let a = [0,1,2,3,4,6,7,9];
let b = [0,1,2,3,5,7,8,10];

function intersect(a, b) {
    var d = {};
    var results = [];
    for (var i = 0; i < b.length; i++) {
        d[b[i]] = true;
    }
    for (var j = 0; j < a.length; j++) {
        if (d[a[j]]) 
            results.push(a[j]);
    }
    return results;
}

