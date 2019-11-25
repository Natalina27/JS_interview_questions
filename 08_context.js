//this
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


