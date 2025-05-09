
const p1 = Promise.resolve(3);

const p2 = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        reject("error in p2");
    },1000);

})

const p3 = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("foo");
    },3000);

})

const p4 = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("hie");
    },2000);

})

Promise.all([p1,p2,p3,p4])
.then((data)=>{
    console.log("All Promises resolved with values ",data);
})
.catch((err)=>{
    console.log("Error: ",err);
})