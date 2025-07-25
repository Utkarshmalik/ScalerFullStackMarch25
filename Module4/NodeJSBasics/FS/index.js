

const fs = require("fs");

//Read some file

console.log("Checkpoint 1");

// fs.readFile("helloFile.txt",'utf-8',(err,data)=>{

//     if(err){
//         console.log("Some Error Occured while reading the file");
//         return;
//     };

//     console.log("File Content : ",data);

// })

// console.log("Checkpoint 2");



// const content = "Hello World! We are learning Nodejs today night";



// fs.writeFile("nodeTest.txt",content,'utf-8',(err)=>{

//     if(err){
//         console.log("Something went wrong while writing a file ", err);
//         return;
//     }

//     console.log("File has been written successfully");
// })


// fs.mkdir("test",{},(err)=>{
//     if(err){
//         console.log("Unable to Create a new directory");
//         return;
//     }

//     console.log("Directory Crteated Successfully");
// })

// fs.mkdir("test",{},(err)=>{
//     if(err){
//         console.log("Unable to Create a new directory");
//         return;
//     }

//     console.log("Directory Crteated Successfully");
// })


// fs.rmdir("test",{ recursive : true},(err)=>{
//     if(err){
//         console.log("Unable to Deelte a  directory", err);
//         return;
//     }

//     console.log("Directory Deleted Successfully");
// })



// fs.rename("helloFile.txt",'helloFileNew.txt',(err)=>{


// })

// fs.unlink("helloFile.txt",(err)=>{


// })


// fs.stat("helloFileNew.txt",(err,stats)=>{

//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(stats.size);
//         console.log(stats.isDirectory());

// })