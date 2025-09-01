

const express = require("express");

const app = express();

const {fork} = require("child_process");

// 0,1,1,2,3,5,8,13,21,34..etc



// app.get("/fib",(req,res)=>{

//     const {number} = req.query;

//     const result = calculateFibonacci(number);

//     return res.status(200).send({
//         status:"success",
//         data:result
//     })

// })



app.get("/fib",(req,res)=>{

    const {number} = req.query;

    //Create a new child process 
    const fibChildProcess = fork("/Users/utmalik/Scaler/ScallerFullStackMarch25/Module4/Problems/Problem2/fibworker.js");

    //send a message to child process to compute the fibonacii 
    fibChildProcess.send({number:number});

    fibChildProcess.on("message",(result)=>{

        return res.status(200).send({
            status:"success",
            data:result
        })

    })
   
    
})





app.listen(8000,()=>{
    console.log("Server is listening on port 8000");
})