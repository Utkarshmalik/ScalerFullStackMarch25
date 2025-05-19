const fs = require("fs");

// promisify is a utility that wraps a callback-based function and returns a version that returns a Promise instead.


// fs.readFile('f1.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
//   });


const readFileAsync = promisify(fs.readFile);

readFileAsync("./f1.txt")
.then((data)=>{
    console.log(data.toString())
})
.catch((err)=>{
    console.log("Error:  ",err);
})

function promisify(fn){

    return function(...args){

        return new Promise((resolve,reject)=>{
                 
            fn(...args,(err,result)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }

            })

        })
    }
}