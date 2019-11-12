console.log(sum( 44, 4));

function sum(a, b){
    return a + b;
}

console.log(sum( 41, 1));

// console.log(i); let doesn't hoist , old var hoists
let i;
i = 44;

//function declaration hoists
console.log(square(3));
function square(num) {
    return num ** 2;
}

//function expression doesn't hoist

//console.log(square1(3));
let square1 = function(num) {
    return num ** 2;
};

//arrow function doesn't hoist
//console.log(squareArrow(3));
const squareArrow = (num) => num ** 2;

