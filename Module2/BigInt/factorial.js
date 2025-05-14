// BigInt 

//1. Using a suffix

// const bigIntNum = 1234567890123456789012345678901234567890n;
// console.log(bigIntNum);

// //2 . Use a constructor

// const bigIntFromStr = BigInt("1234567890123456789012345678901234567890");
// console.log(bigIntFromStr);


// const a = 1000000000000000000000n;
// const b  = 500000000000000000000n;

// const sum = a+b;

// console.log(sum);


// const x=5;


// const publicKey = BigInt("1234567890123456789012345678901234567890");
// const privateKey = BigInt("9876543210987654321098765432109876543210");

// const encryptedMessage = publicKey * privateKey;


// console.log(encryptedMessage);




// const bigIntNum = 10n;
// const regularNum = 5;


// console.log(bigIntNum * regularNum);







// function factorial(n){

//     let result = 1;

//     for(let i=1;i<=n;i++){
//         result = result * i;
//     }

//     return result;

// }


// const ans = factorial(140);
// console.log(ans);


// Number (-2^53 +1)  (2^53 - 1) 



function factorial(n){

    let result = 1n;

    for(let i=1n;i<=n;i++){
        result = result * i;
    }

    return result;

}


const ans = factorial(140);
console.log(ans);
