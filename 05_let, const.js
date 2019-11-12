//let

let a = 'variable a';
let b = 'variable b';

{
    a = 'new variable a';
    let b = 'new variable b';

    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);

