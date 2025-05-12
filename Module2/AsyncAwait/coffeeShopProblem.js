// Question
// Here we have a problem that we are at a coffee shop and the now the coffee shop only has coffee we cannot order for any other drink , it will reject if any other drink is ordered and if s coffee is ordered it will be accepted then it will be processed then it will be serverd and at the end we will recieve a bill


function placeOrder(drink){
    return new Promise((resolve,reject)=>{
        if(drink==="coffee"){
            resolve('Order for Coffee Placed');
        }else{
            reject('Order cannot be placed');
        }

    })
}

function processOrder(orderStatus){
    return new Promise((resolve,reject)=>{
        resolve(`${orderStatus} , Processed and Served`);
    })
}

function generateBill(processedOrder){
    return new Promise((resolve,reject)=>{
        resolve(`${processedOrder} and Bill generated with 2000 Rs`);
    })
}



async function serveOrder(){
    try{
    const orderStatus = await placeOrder('juice');

    const processedOrder = await processOrder(orderStatus);

    const generatedBill = await generateBill(processedOrder);

    console.log(generatedBill);
    }
    catch(error){
        console.log(error);
    }

}

serveOrder();





// placeOrder('coffee')
// .then((orderStatus)=>{
//     return processOrder(orderStatus);
// })
// .then((processedOrder)=>{
//      return generateBill(processedOrder);
// })
// .then((billGenerated)=>{
//     console.log(billGenerated);
// })
// .catch((issue)=>{
//     console.log(issue);
// })
