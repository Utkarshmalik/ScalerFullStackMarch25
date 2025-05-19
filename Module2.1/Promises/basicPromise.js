const fs = require("fs")
console.log("Before");

const promise = fs.promises.readFile("./f1.txt");

console.log(promise);


console.log("After");

setTimeout(()=>{
    console.log(promise);

},1000)
