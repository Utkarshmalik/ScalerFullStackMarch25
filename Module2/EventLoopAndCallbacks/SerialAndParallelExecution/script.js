

const fs = require("fs");

// console.log("Before");

// // Synchronous function provided by nodejs to read a file
// const buffer = fs.readFileSync("./f1.txt");

// console.log(""+buffer);

// console.log("After");






// console.log("Before");

// // Asynchronous function provided by nodejs to read a file

// fs.readFile("./f1.txt",(err,data)=>{
//     console.log(""+data);
// })


// console.log("After");





// console.log("Before");

//  const content1 = fs.readFileSync("./f1.txt");
//  const content2 = fs.readFileSync("./f2.txt");

//  console.log("" +content1 + "\n" + content2);

// console.log("After");






// console.log("Before");

// fs.readFile("./f1.txt", f1cb);
// fs.readFile("./f2.txt", f2cb);

// function f1cb(err,content1){
//     console.log(" "+content1);
// }

// function f2cb(err,content2){
//     console.log(" "+content2);
// }

// console.log("After");





//Serial Way 

console.log("Before");

fs.readFile("./f1.txt", f1cb);

function f1cb(err,content1){
    console.log(" "+content1);

    fs.readFile("./f2.txt", f2cb);

    function f2cb(err,content2){
        console.log(" "+content2);
    }

}

console.log("After");