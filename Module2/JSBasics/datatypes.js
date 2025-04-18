
// var let const

var x =10;
console.log(x);

var y;
console.log(y);



let z = 1.5;

console.log(z);
console.log(typeof z);



let k = 5/2;
console.log(k);
console.log(typeof k);



let str1 = "I am good";
let name = "utkarsh";
let age = 31;

let newStr = 'I am ' + age + ' years old';

console.log(str1);
console.log(name);
console.log(newStr);

console.log(typeof str1);
console.log(typeof name);
console.log(typeof newStr);


let isSingle = true;
let isMarried = false;

console.log(isSingle);
console.log(isMarried);

console.log(typeof isSingle);
console.log(typeof isMarried);





var p;
console.log(p);
console.log(typeof p);



var l = null;
console.log(l);
console.log(typeof l);




let person = {
    name:"Utkarsh",
    age:31,
    isMarried:true
}

console.log(person);

console.log(typeof person);


let hobbies = ["Going to the gym","Go to a party","Learn new concepts everyday"];

console.log(hobbies);

console.log(typeof hobbies);


console.log(Array.isArray(person));
console.log(Array.isArray(hobbies));



//Functions 


function fn(param1){
    console.log("Helo world ",param1);
    // return "I am a value returned from the fn";

}

fn();

let output = fn("Yogesh");

console.log(typeof fn);

console.log(output);
























// Primitive Data Types:

// Number
// String
// Null
// Undefined
// Boolean

// New Primitive Types:

// BigInt
// Symbol


// Non-Primitive Types (Reference Types):

// Object
// Functions
// Arrays


// New Non-Primitive Types:

// Map
// Set
// WeakMap
// WeakSet