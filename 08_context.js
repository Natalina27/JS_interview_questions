//this
//call(), apply(), bind()
const person = {
    surname: 'STARK',
    knows : function (what, name) {
        console.log(`You  know ${what}, ${name} ${this.surname}`);
    }
};

person.knows('everything', 'Bran');

