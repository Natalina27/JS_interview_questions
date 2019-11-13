//Closure (замыкание ) это когда функция замыкает в себе значения из вышестоящего скоупа
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