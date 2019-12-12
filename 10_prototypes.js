//__proto__
//Object.getPrototypeOf()
function Cat(name, color){ //class Cat
    this.name = name;
    this.color = color;
}
const cat = new Cat('Kot', 'white');
Cat.prototype.voice = function(){ console.log(`Cat ${this.name} says myao`)};
cat.voice();
console.log(Cat.prototype);
console.log(cat);
console.log(cat.__proto__ === Cat.prototype);
console.log(cat.constructor);

//=================================
console.log('====================');

function Person() {}
Person.prototype.legs = 2;
Person.prototype.skin = 'white';

const person = new Person();
person.name = 'Natalya';

console.log('skin' in person);
console.log(person.legs);
console.log(person.name);

console.log(person.hasOwnProperty('name'));
console.log(person.hasOwnProperty('skin'));

//Object.create();
let proto = { year: 2019};
const myYear = Object.create(proto);

console.log(myYear.year);
proto.year = 2200;
console.log(myYear.year);
proto = {year: 999};
console.log(myYear.year);

//console.log(myYear.hasOwnProperty('year') );
//console.log(myYear.__proto__ === proto );






