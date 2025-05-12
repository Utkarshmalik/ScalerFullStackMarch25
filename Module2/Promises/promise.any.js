// Promise.any() returns a promise that fulfills as soon as one of the promises fulfills


// If all promises reject, then it rejects with an AggregateError.


const p1 = new Promise((_, reject) => setTimeout(() => reject('Fail 1'), 1000));
const p2 = new Promise((resolve,reject) => setTimeout(() => resolve('Win 4!'), 2000));
const p3 = new Promise((_, reject) => setTimeout(() => reject('Fail 2'), 1500));



Promise.any([p1, p2, p3])
.then(console.log)
.catch((errr)=>{
    console.log(errr);
})