const fs = require("fs")
console.log("Before")

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




console.log("Before")
const promise = fs.promises.readFile("./f1.txt");

promise.then((data)=>{
    console.log("Content " + data);
   const p2 =  fs.promises.readFile("./f19.txt");
   return "Hiii";
})
.then((data)=>{
    console.log(data);
    return "Hello"
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log("Error : ",err);
})





