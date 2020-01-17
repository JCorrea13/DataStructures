//const emails = ["", ""]; // arreglo
//const textos = new Array(10);
//textos [0] = "Hola mundo!";

//const numeros = new Array(10);
//numeros[0] = 1;

//const array1 = [1, 4, 8, 16];
//const map1 = array1.map(x => x*2);
//console.log(map1);

//Array
//const array2 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
//for (i=0; i<10; i++){
//    console.log("Index "+ i + ": "+ array2[i]);
//}

let items = [];
let top = 0;

function init(size){
    items = new Array(size);
    top = 0;
}

function push(item){
    items[top] = item;
    top++;
}

function pop(){
    let ret = items[top-1];
    items[top-1] = null;
    top--; 
    return ret;
}
function peek(){
    //let ret = items[top-1]
    //return ret;
    return items[top-1];
}

function IsEmpty(){
    return top == 0;
    
    /*if(top == 0){
        return true
    }
    else{
        return false
    }
*/
}

function IsFull(){
   return top == items.length;
}

init(6);
console.log(IsEmpty());
push(6);
push(7);
push(2);
console.log("Pop:" + pop());
push(22);
console.log("Peek:" + peek());
console.log(items);
console.log("Esta vacia? " + IsEmpty());
console.log("Esta llena? " + IsFull());
push(26);
push(4);
console.log(items);
console.log("Esta llena? " + IsFull());
console.log(items);
push(1);
console.log(items);
console.log("Esta llena? " + IsFull());
