

//Then and catch

// then: Promise gives us a method named then which is an event listener over promise and it triggers when the promise is resolved(the task is done).
// catch: catch is also an event listener over promise and it triggers when the promise is rejected(you get an error).

const fs = require("fs")
console.log("Before")
const promise = fs.promises.readFile("./f9.txt");

// promise.then(f1)
// promise.catch(f2)
// 


promise.then((value)=>{
    console.log("Data1 inside the file is "+value);
})

promise.then((value)=>{
    console.log("Data2 inside the file is "+value);
})

promise.then((value)=>{
    console.log("Data3 inside the file is "+value);
})
promise.catch((err)=>{
    console.log("Error ",err.message);
})

promise.catch((err)=>{
    console.log("Error2 ",err.message);
})