
// const fs = require("fs");

// const promise = fs.promises.readFile('./f1.txt');

//   promise.then((data)=>{
//     console.log("Content " + data);
//    const p2 =  fs.promises.readFile("./f2.txt");
//    return p2;
// })
// .then((data)=>{
//     console.log("Content " + data);
//     const p3=fs.promises.readFile("./f3.txt");
//     return p3;
// })
// .then((data)=>{
//     console.log("Content " + data)
// })
// .catch((err)=>{
//     console.log("Error ",err);
// })





//Async Function 


// async function fetchData(){

//     return 'data';
// }

// const dataPromise = fetchData();

// dataPromise.then((res)=>{
//     console.log(res);
// })





// const p = new Promise((resolve,reject)=>{
//     resolve('Promise Resolved');
// })

// async function fetchData(){
//     return p;
// }

// const dataPromise = fetchData()

// dataPromise.then((res)=>{
//     console.log(res);
// })



// const p = new Promise((resolve , reject)=>{
//     resolve('Promise Resolved')
//   })
  

//   async function handlePromise(){
//     const val = await p;
//     console.log(val);
//   }

//   handlePromise()





//   function fetchData() {
//     p.then((res)=> console.log(res))
//   }

//   fetchData()











const p = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve('Promise Resolved')
    } , 2000)
  })


//   async function handlePromise(){

//     console.log("Scaler"); // this line will be excuted immediateley

//     const val = await p;   // JS engine waits for the promise to get resolved and then moves forward

//     console.log("Create Impact");  // Delayed Execution

//     console.log(val); // Prints the value of resolved promise

//   }

//   handlePromise();