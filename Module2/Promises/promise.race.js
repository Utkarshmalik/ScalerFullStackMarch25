const p1 = new Promise(resolve => setTimeout(() => resolve('First!'), 2000));
const p2 = new Promise((resolve,reject) => setTimeout(() => reject('Second!'), 1000));


Promise.race([p1,p2])
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log("Error ",err);
})

// Promise.race() returns a promise that settles (fulfilled or rejected) as soon as the first promise settles in the iterable you pass.

// If the first promise to settle fulfills, the result is that value.

// If the first promise to settle rejects, the result is the error.