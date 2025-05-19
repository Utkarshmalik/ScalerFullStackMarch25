
import { performTransaction } from "./transaction.js";

//deposit 500 Rs

console.log(performTransaction('deposit',500));

//Withdraw 200 Rs 

console.log(performTransaction('withdraw',200));

console.log(performTransaction('deposit',5000));

console.log(performTransaction('withdraw',6500));



//Seperation of Concerns 


// auth 
// product 
// cart
// order

//Reusability 


//addToCart()
//getCart()

//Maintanaibility 
