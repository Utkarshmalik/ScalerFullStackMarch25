let fs = require("fs");

// console.log("Before");


setTimeout(()=>{
    console.log("Hii");

},1000)

fs.readFile("./f1.txt", f1cb);


function f1cb(err, data){
    if(err){
        console.log("Error", err);
    }
    else{
        console.log("Content 1 " + data);

    }
}

const p2 = fs.promises.readFile("./f2.txt");


p2.then((data)=>{
    console.log("Content 2 " + data);

})

console.log("After");



// console.log('A');


// setTimeout(() => console.log('B'), 0); 


// Promise.resolve().then(() => console.log('D'));

// console.log('E');




// Micro : Promise.then, queueMicrotask	
//Macro : setTimeout, setInterval, DOM events
