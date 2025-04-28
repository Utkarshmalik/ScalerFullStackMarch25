

//It was taking function as an input 

// function greet(name){
//     console.log(`Hello ${name}!`);
// }


// function sayHi(name){
//     console.log(`Hi ${name}!`);
// }


//HOFs

// function processUserInput(callback){

//     //take the user input 
//     const name = "Rahul";

//     callback(name);
// }


// processUserInput(greet);
// processUserInput(sayHi);



// function double(number){
//     return number * number;
// }

// function tripple(number){
//     return number * number * number;
// }


// console.log(double(5));
// console.log(double(6));

// console.log(tripple(7));





//HOFs 

function multiplier(factor){

    return function(number){

        return number ** factor;
    }

}

const square = multiplier(2);
const cube = multiplier(3);
const tenPower = multiplier(10);


console.log(square(5));
console.log(cube(5));
console.log(cube(8));

console.log(tenPower(6));






// Higher Order Functions = Functions that either take other functions as arguments or return functions themselves. 

// Reusability: Instead of rewriting similar code, you can pass different behaviors as functions.

// Abstraction: They allow you to abstract actions like looping, transformation, filtering, etc.

