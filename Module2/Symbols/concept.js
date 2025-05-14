// It is a unique and immutable value that can be used as a key for object properties

// Unlike other primitive types (like strings, numbers, and booleans),
//  each Symbol is guaranteed to be unique, even if two Symbols have the same description.

// const a=5;
// const b=5;

// console.log(a===b);

// const sym1 = Symbol();
// const sym2 = Symbol();

// console.log(sym1 === sym2);




//Unique
//Immutable 
//Non Covertible 





// const sym1 = Symbol("Hii");
// const sym2 = Symbol("Hii");


// console.log(sym1==sym2);

// console.log(sym1.description);




const sym = Symbol("uniqueKey");


const obj = {
    [sym] : "This is a random thing"
}

console.log(obj[sym]);