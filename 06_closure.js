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
