// Immediate Invoked Function Expression
//Моментально вызывающиеся функции

let result = [];
for(let i = 0; i < 5; i++){
    result.push(function () {
        console.log(i);
    })
}
result[2]();