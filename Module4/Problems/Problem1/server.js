
const express = require("express");
const fs= require("fs");
const path = require("path");


const app= express();

app.get("/downloadFullFile",(req,res)=>{

    const filePath = path.join(__dirname,'bigFile');

    fs.readFile(filePath,(err,data)=>{

        if(err){
            return res.status(500).send({error:"Internal Server Error"});
        }

        res.setHeader('Content-Type','text/plain');
        res.send(data);
    })

})




app.get("/downloadFullFileWithStreams",(req,res)=>{

    const filePath = path.join(__dirname,'bigFile');

    //create a readable stream for the file 
    const readableStream = fs.createReadStream(filePath, {highWaterMark:80000} );

    //creae a writable stream for the file 
    const writableStream = fs.createWriteStream("copyOfBigFile");

    readableStream.on("data",(chunk)=>{
        console.log(`Received ${chunk.length} bytes of data`);

        writableStream.write(chunk);

    });

    readableStream.on("end",()=>{

        console.log("Finished Reading a file");

        //end the writable stream 
        writableStream.end();

        console.log("Finished Reading and Writing the file");
    })
    


})








app.listen(8000,()=>{
    console.log(`Server is listening on port 8000`);
})