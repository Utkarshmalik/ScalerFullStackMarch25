function CustomPromise(executorFn){

    let state = "PENDING";
    let value = undefined;
    let scb  = [];
    let fcb  = [];


    this.then=(cb)=>{
        scb.push(cb);
    }

    this.catch=(cb)=>{
        fcb.push(cb);
    }

    const resolve  = (val)=>{

        state = "RESOLVED";
        value = val;

        scb.forEach(cb=>{
            cb(value);
        })

    }

    const reject = (error)=>{

        state  = "REJECTED";
        value = error;

        fcb.forEach(cb=>{
            cb(value);
        })


    }

    executorFn(resolve,reject);


}

const myPromise = new CustomPromise((resolve,reject)=>{

    setTimeout(()=>{
     resolve("Hey i am resolved");
    },1000);
 
 });
 
 
 myPromise
 .then((data)=>{
     console.log("Success 1: ",data);
 })
 
 myPromise
 .then((data)=>{
     console.log("Success 2: ",data);
 })

 myPromise
 .catch((error)=>{
     console.log("Error 1: ",error);
 })

 myPromise
 .catch((error)=>{
     console.log("Error 2: ",error);
 })


