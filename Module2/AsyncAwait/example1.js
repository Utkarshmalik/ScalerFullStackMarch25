const p1 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve('Promise Resolved')
    } , 4000)
  })

  const p2 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve('Promise Resolved')
    } , 3000)
  })


  async function handlePromise(){

    console.log("Scaler");
    
    const val = await p1;

    console.log("Create Impact 1");
    console.log(val);

    const val2 = await p2;

    console.log("Create Impact 2");
    console.log(val2);

  }

  handlePromise();