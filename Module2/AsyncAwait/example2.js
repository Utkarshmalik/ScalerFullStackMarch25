const fs = require("fs");

// console.log("Before")
// const promise = fs.promises.readFile("./f1.txt");

// promise.then((data)=>{
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
// console.log("After");




// F1 : 1 , F2:2 , F3:3

// async function readMultipleFilesInSync(){

//     const data1 = await fs.promises.readFile("./f1.txt");

//     console.log("Content " + data1);

//     const data2 = await fs.promises.readFile("./f2.txt");

//     console.log("Content " + data2);

//     const data3 = await fs.promises.readFile("./f3.txt");

//     console.log("Content " + data3);

// }

// readMultipleFilesInSync();


// F1 :2, F2:3, F3:1



const dataPromise1 =  fs.promises.readFile("./f1.txt");
const dataPromise2 =  fs.promises.readFile("./f2.txt");
const dataPromise3 =  fs.promises.readFile("./f3.txt");

async function readMultipleFilesInSync(){

    try{
    const data1 = await dataPromise1;
    console.log("Content " + data1);
    const data2 = await dataPromise2;
    console.log("Content " + data2);
    const data3 = await dataPromise3;
    console.log("Content " + data3);
    }
    catch(err){
       console.log("Some Error Occured while reading ",err);
    }

}

readMultipleFilesInSync();