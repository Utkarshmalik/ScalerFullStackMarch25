let fs = require("fs");

console.log("Before");

// it is also known as the pyramid of doom.



fs.readFile("./f1.txt", f1cb);






function f1cb(err, data){
    if(err){
        console.log("Error", err);
    }
    else{
        console.log("Content " + data);

        fs.readFile("./f2.txt", f2cb);


    }
}

function f2cb(err, data){
    if(err){
        console.log("Error" + err);
    }
    else{
        console.log("Content " + data);

        fs.readFile("./f3.txt",f3cb);

    }
}

function f3cb(err, data){
    if(err){
        console.log("Error" + err);
    }
    else{
        console.log("Content " + data);
    }
}


console.log("After");

// Nesting of callbacks
// Inversion of control: We send our callback function to an async function and then that async function has the control to call it(trust issues).


// Due to both above issues, callback-based functions are not preferred to be used.

