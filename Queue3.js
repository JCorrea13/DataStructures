const items = [];
/*
function init(size){
    items = new Array(size);
}
function enqueue(item){
    items = [item, ...items];
}
function dequeue(item){
    const value = items[items.lenght -1];
    items = items.slice(0, items.lenght-1);
    return value;
}

init(5);
enqueue(10);
enqueue(5);
console.log(items);
console.log(dequeue());
console.log(items);
*/

items.unshift(1);
items.unshift(2);
items.unshift(3);
console.log(items);
console.log(items.pop());
console.log(items);
