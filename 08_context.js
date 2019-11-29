//this - explicit context
//call(), apply(), bind()
const person = {
    surname: 'STARK',
    knows : function (what, name) {
        console.log(`You  know ${what}, ${name} ${this.surname}`);
    }
};

const john ={
    surname: 'SNOW',
};

person.knows('everything', 'Bran');
person.knows.call(john, 'nothing', 'John');
person.knows.apply(john, ['nothing', 'John']);
person.knows.call(john, ...['nothing', 'John']);
person.knows.bind(john, ...['nothing', 'John'])();
const bound = person.knows.bind(john, ...['nothing', 'John']);
bound();

//===========
//Class constructor
function Person(name, age){
    this.name = name;
    this.age = age;

    console.log(this);
}

const elena = new Person('Elena', 20); //this
//=======
function logThis() {
    console.log(this);
}

const obj = {num: 42};
logThis.apply(obj);
logThis.call(obj);
logThis.bind(obj)();

// ======
//this - implicit context
const animal = {
    legs: 4,
    logThis: function(){
        console.log('This', this);
    }
};

animal.logThis();

//this and arrow functions
console.log('==========================');
function Cat(color) { //function creates its own context this
    this.color = color;
    console.log('This', this);
    (() => console.log('Arrow this', this))();//Arrow function doesn't create its own context
}

new Cat('red');
