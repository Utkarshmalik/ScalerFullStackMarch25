// * Synchronous code -> the code that executes line by line


// console.log("Before");

// function fn() {
//     console.log("I am fn");
// }

// fn();

// console.log("After");









/**
 * Asynchronous code -> piece of code that's executed at the current point of time
 * and other piece of code is executed on later part
 */


console.log("Before");

function fn() {
    console.log("I am fn");
}

setTimeout(fn, 2000);

console.log("After");

