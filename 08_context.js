//this
//call(), apply(), bind()
const person = {
    surname: 'STARK',
    knows : function (what, name) {
        console.log(`You ${what} know, ${name} ${this.surname}`);
    }
};

