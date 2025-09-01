const {spawn} = require("child_process");


//spawn a new process to list files in the current directory 


// const child = spawn('ls',['-lh','/usr']);

// //Listen to the data from stdout 

// child.stdout.on('data',(data)=>{
//     console.log(`stdout ${data}` );
// });

// console.log("Hii");


spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",['https://www.scaler.com']);
