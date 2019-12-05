//new
//взаимодействие между обьектами
function Cat (color, name){ //class Cat
    this.color = color;
    this.name = name;
}

const cat = new Cat('red', 'KOT'); //new instance of class Cat
console.log(cat);


//we can create own 'new' - myNew
function myNew(constructor, ...args) {
    const obj ={};
    Object.setPrototypeOf(obj, constructor.prototype);
    return constructor.apply(obj, args) || obj
}

const newCat = myNew(Cat,'black', 'KOT');
console.log(newCat);

//
const cat1 = new Cat();
console.log('cat1 = ' , cat1); //cat1 =  Cat { color: undefined, name: undefined }

