

const http = require("http");

// const server = http.createServer((req,res)=>{

//     //Set Reponse Headers 
//     res.setHeader('Content-Type','text/plain');

//     //write some response content 
//     res.write("Hi All , This is a response coming from a HTTP server");

//     //End the reponse 
//     res.end();

// });


// const server = http.createServer((req,res)=>{
//     //set the Response Headers
//     res.setHeader('Content-Type','text/html');

//     //write the response content 
//     res.write(
    //    `
    //         <html lang="en">
    //     <head>
    //         <title>Document</title>
    //     </head>
    //     <body>
    //         <h1> 
    //             Hello World ! This is HTML response being sent from a Nodejs server
    //         </h1>
    //     </body>
    //     </html> 
//         `
//     );
//     //end the response 
//     res.end();


// })


// const server = http.createServer((req,res)=>{

//     //set the response header 
//     res.setHeader('Content-Type','application/json');
    
    
//     const randomResponseData = {
//         user:{
//             name:"Utkarsh",
//             age:31,
//             location:"Hyderabad"
//         }
//     }

//     res.end(JSON.stringify(randomResponseData));

// })



/*

/ : send a plain text based response back 
/about : send a HTML response back 
//contact : send a JSON response back 

//any other other : page Not found as text 


*/

const server = http.createServer((req,res)=>{

    if(req.url==="/"){

        res.writeHead(200,{
            'Content-Type':'text/plain'
        });

        res.end("Welcome to Home Page");
    }
    else if(req.url==="/about"){

               res.writeHead(200,{
            'Content-Type':'text/html'
        });

        res.end(
                   `
            <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <h1> 
                Hello World ! This is HTML response being sent from a Nodejs server
            </h1>
        </body>
        </html> 
        `
        );


    }
    else if(req.url==="/contact"){

           res.writeHead(200,{
            'Content-Type':'application/json'
        });

        const response = {
            name:"Utkarsh",
            email:"utmalik@scaler.com"
        }

        res.end(JSON.stringify(response));

    }
    else{

        res.writeHead(404,{
            'content-type':'text/plain'
        })

        res.end("404 Page Not Found");
    }

})


const port = 3000;

server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})


// HTTP Request and HTTP Response

