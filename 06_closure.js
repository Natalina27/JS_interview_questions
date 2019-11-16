//Closure (замыкание ) это когда функция замыкает в себе значения из вышестоящего скоупа, но которые не доступны извне
function sayHello (name){
    const message = 'Hello' + name ;

    return function(){
        console.log(message)
    }
}

const helloToElena = sayHello('Elena');
const helloToIgor = sayHello('Igor');
console.log(helloToElena);
helloToElena();
helloToIgor();

// Practical example
function createFrameworkManager(){
    const fw = ['Angular', 'React'];
    return{
        print: function(){
            console.log(fw);
        },
        add: function(framework){
            fw.push(framework);
        }
    }
}

const manager = createFrameworkManager();
console.log(manager);
//console.log(fw); ReferenceError: fw is not defined
manager.print();
manager.add('VueJS');
manager.print();

// Example from other source:
//важность использования замыканий: для поддержания собственной ссылки на переменную во внешней области видимости.
//Это очень мощная техника — она даёт замыкающей функции guessPassword исключительный доступ к переменной password, делая невозможным доступ к password снаружи.
function secretPassword (){
    let password = 'xh39sk';

    return{
        guessPassword: function(guess){
            return guess === password;
        }
    }
}

let passwordGame = secretPassword();
console.log(passwordGame.guessPassword('nutd5'));
console.log(passwordGame.guessPassword('xh39sk'));

//setTimeout

const fib = [1, 2, 3, 5, 8, 13];

for ( var i = 0; i < fib.length; i++) { // let resolve this problem without closure
    (function(j) {
        setTimeout(function () {
            console.log((`fib[${j}] = ${fib[j]}`));
        }, 1500);
    })(i)
}