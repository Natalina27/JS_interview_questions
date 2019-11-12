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

//const

const PORT = 8080;
//PORT = 2000; TypeError: Assignment to constant variable.
const array = ['JS', 'is', 'aweresome'];
array.push('!');
console.log(array);
array[0] = 'Javascript';
console.log(array);
//array = ''; TypeError: Assignment to constant variable.
//console.log(array);

const obj = {};
obj.name = 'Natalya';
obj.age = 44;
obj.surname = 'Myunster';
obj.middleName = 'NM';

console.log(obj);

obj.age = 88;
delete obj.middleName;

console.log(obj);
// obj = ''; TypeError: Assignment to constant variable.
//obj = 23; TypeError: Assignment to constant variable.
//Мы можем менять только внутреннее состояние обьекта
