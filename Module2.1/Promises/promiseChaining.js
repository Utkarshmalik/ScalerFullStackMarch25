const fs = require("fs")
// console.log("Before")

// const promise1 = fs.promises.readFile("./f1.txt");
// const promise2 = fs.promises.readFile("./f2.txt");
// const promise3 = fs.promises.readFile("./f3.txt");

// promise1.then(function (data){
//     console.log("Content " + data)
// })


// promise2.then(function (data){
//     console.log("Content " + data)
// })


// promise3.then(function (data){
//     console.log("Content " + data)
// })



// const promise1 = fs.promises.readFile("./f1.txt");

// promise1.then(function (data){
//     console.log("Content " + data)

//         const promise2 = fs.promises.readFile("./f2.txt");

//         promise2.then(function (data){
//             console.log("Content " + data)


//             const promise3 = fs.promises.readFile("./f3.txt");

//             promise3.then(function (data){
//                 console.log("Content " + data)
//             })

//     })
    

// })







// console.log("Before")
// const promise = fs.promises.readFile("./f1.txt");

// promise.then((data)=>{
//     console.log("Content " + data);
//    const p2 =  fs.promises.readFile("./f9.txt");
//    return p2;
// })
// .then((data)=>{
//     console.log("Content " + data);
//     const p3=fs.promises.readFile("./f3.txt");
//     return p3;
// })
// .then((data)=>{
//     console.log("Content " + data)
// })
// .catch((err)=>{
//     console.log("Error ",err);
// })




// console.log("Before")
// const promise = fs.promises.readFile("./f1.txt");

// promise.then((data)=>{
//     console.log("Content " + data);
//    const p2 =  fs.promises.readFile("./f19.txt");
//    return "Hiii";
// })
// .then((data)=>{
//     console.log(data);
//     return "Hello"
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log("Error : ",err);
// })









// let promise = fs.promises.readFile("f1.txt");

// promise.then(function(data) {
//     console.log("Hi, the data is:", data);
// });

// promise.then(function(data) {
//     console.log("Buffer format is:", data);
// });

// promise.then(function() {
//     console.log("I am not accepting");
// });


// let promise = fs.promises.readFile("f10.txt");

// promise.catch(function(err) {
//     console.log("err is 1:", err);
// });

// promise.catch(function(err) {
//     console.log("err is 2:", err);
// });

// promise.catch(function(err) {
//     console.log("I am not accepting");
// });




// The finally method is used to attach callbacks that execute regardless of whether the promise is resolved or rejected. It's commonly used to perform cleanup or finalization actions.

// let promise = fs.promises.readFile("f10.txt");

// promise.finally(function(err) {
//     console.log("err is 1", err);
// });

// promise.finally(function(err) {
//     console.log("err is 2", err);
// });

// promise.finally(function() {
//     console.log("I am not accepting");
//     console.log("Second line of finally");
// });




// Promise.resolve(100)
//     .catch((err) => {
//         console.log("err", err);
//     })
//     .then((data) => {
//         console.log("data", data);
//     });




//Promise.reject 

// The Promise.reject method allows you to explicitly create a rejected promise with a specified reason.



// const rejectedPromise1 = Promise.reject("Explicit Rejection");


// rejectedPromise1
// .then((data) => {
//             console.log("data", data);
//     })
// .catch((reason) => {
//         console.log("Caught:", reason);
// });



// let Filepromise = fs.promises.readFile("f10.txt");

// Filepromise.catch((error) => {
//     console.log("Caught:", error);
// });



// Promise.resolve("Initial value")
//     .then((data) => {
//         console.log("Data:", data);
//         throw new Error("Error from then");
//     })
//     .catch((err) => {
//         console.log("Caught:", err.message);
//     });



// Promise.reject("Rejected value")
//     .catch((data) => {
//         console.log("Caught:", data);
//         throw new Error("Error from catch");
//     })
//     .catch((err) => {
//         console.log("Caught:", err.message);
//     });




// Promise.resolve("Initial data")
//     .then((data) => {
//         console.log("1st then:", data);
//         throw new Error("Error from first catch");
//     })
//     .catch((err) => {
//         console.log("1st catch:", err.message);
//     });




// Promise.resolve("Initial data")
//     .then((data) => {
//         console.log("1st then:", data);
//         return Promise.reject("Rejected from first then");
//     })
//     .catch((err) => {
//         console.log("1st catch:", err);
//     });



// Promise.resolve("Initial data")
//     .catch((err) => {
//         console.log("1st catch:", err);
//     })
//     .then((data) => {
//         console.log("2nd then:", data);
//         return fs.promises.readFile("file.txt", "utf8");
//     })
//     .catch((err) => {
//         console.log("2nd catch:", err.message);
//     });



// Promise.resolve("Initial data")
//     .finally(() => {
//         console.log("Finally block executed");
//     })
//     .then((data) => {
//         console.log("Resolved:", data);
//     });




// If the finally block returns a rejected promise, throws an error, or returns a promise that will be rejected, the error from the finally block will be the outcome of the chain.



// Promise.reject("Initial rejection")
// .finally((data) => {
//     console.log(data);
//     // throw new Error("I am an error");
//     return Promise.reject("An error from finally");
// })
// .catch((err) => {
//     console.log("Caught:", err);
// });


// When the finally block returns a value or a promise that will not be rejected, it doesn't influence the outcome of the parent promise. The resolved value of the parent promise will continue down the chain.



// Promise.resolve("Initial data")
// .finally((data) => {
//     console.log(data);
//     return "Finally Resolved";
// })
// .then((data) => {
//     console.log("Resolved:", data)
// })




// Promise.resolve("Initial data")
// .finally((data) => {
//     console.log(data);
//     // return "Something";
//     throw new Error("An error in finally");
// })
// .catch((err) => {
//     console.log("Caught:", err.message);
// })



// Promise.reject("Initial data")
// .finally((data) => {
//     console.log(data);
//     return "Something";
// })
// .catch((err) => {
//     console.log("Caught:", err);
// })