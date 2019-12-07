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