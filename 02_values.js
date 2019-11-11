let a = 42;
let b = a;
b++;
console.log('a', a);
console.log('b', b);

//arrays

let arrayA = [1, 2, 3];
let arrayB = arrayA;
arrayB.push(4);
console.log('arrayA', arrayA);
console.log('arrayB', arrayB);

//concat() create copy of array
let arrayA1 = [1, 2, 3];
let arrayB2 = arrayA1.concat();
arrayB2.push(4);
console.log('arrayA1', arrayA1);
console.log('arrayB2', arrayB2);

