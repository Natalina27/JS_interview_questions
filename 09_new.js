//new
//взаимодействие между обьектами
function Cat (color, name){
    this.color = color;
    this.name = name;
}

const cat = new Cat('black', 'KOT');
console.log(cat);

function myNew(constructor, ...args) {
    const obj ={};
    Object.setPrototypeOf(obj, constructor.prototype);
    return constructor.apply(obj, args) || obj
}

const newCat = myNew(Cat,'black', 'KOT');
console.log(newCat);

