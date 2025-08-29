

const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const clientFilePath = '/Users/utmalik/Scaler/ScallerFullStackMarch25/Module4/WebSockets/Client/index.html';


//Create an express app 
const app = express();

//Create an HTTP sever using the Express app 
const server = http.createServer(app);

//Set up Socket.IO on the server
const io = socketIO(server);

app.get("/",(req,res)=>{
    res.sendFile(clientFilePath);
})

// //Handles the incoming Websocket connections
// io.on("connection",(socket)=>{
//     console.log("A new wesocket connection is established with connectionId ",socket.id);

//     //Handle the message that is coming from the client 
//     socket.on('message',(msg)=>{
//         console.log("Message Recived from client ", msg);
//     })


//     //sends a brodcast mesage to all clients 
//     io.emit("message", "Hey I am a server , sending a brodcast message");


//     socket.on("disconnect",()=>{
//         console.log(`A connection with connectId ${socket.id} is broken`);
//     })
// })



//Handles the incoming Websocket connections
io.on("connection",(socket)=>{
    console.log("A new wesocket connection is established with connectionId ",socket.id);

    socket.on("roomMessage",(msg)=>{

        console.log("New Message Recived via server ",msg);
        const {room , message} = msg;

        io.emit("message", message);

    })



    socket.on("disconnect",()=>{
        console.log(`A connection with connectId ${socket.id} is broken`);
    })
})













server.listen(3000,()=>{

    console.log("Server is running on port 3000");
})