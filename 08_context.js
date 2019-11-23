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

