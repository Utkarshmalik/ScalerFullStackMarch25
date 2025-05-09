
// function promiseSetTimeout(delay){

//     const promise = new Promise((resolve,reject)=>{

//         //async task 
//         //if async task is successful : resolve a promise with some value 
//         // else reject a promise with a reason/error

//         setTimeout(()=>{

//             resolve("Hey Then");

//         },delay)

//     })

//     return promise;

// }


// promiseSetTimeout(1000)
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })






const myPromise = new Promise((resolve,reject)=>{

   setTimeout(()=>{
    // reject("Async task failed");
    resolve("Hey i am resolved");
   },1000);

});


myPromise
.then((data)=>{
    console.log("Success: ",data);
})

myPromise
.catch((error)=>{
    console.log("Error: ",error);
})



























// setTimeout(()=>{
//     console.log("Hey Then");
// },1000)