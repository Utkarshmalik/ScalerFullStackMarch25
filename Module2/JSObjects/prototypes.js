


// const person = {
//     name:"Utkash",
//     age:31,
//     isMarried:true
// }


// console.log(person);

// console.log(person.toString());


// const arr = [1,2,3,4,5,6];

// console.log(arr);


// arr.forEach((item)=>{
//     console.log(item);
// })

// console.log(arr.toString());


// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName
// }

// Person.prototype.getFullName = function (){
//     return this.firstName + " " + this.lastName;
// }


// const person1 = new Person("John","Doe");

// console.log(person1.getFullName());

// const person2 = new Person("Utkarsh","Malik");
// const person3 = new Person("Vandit","Patel");


// //one level up in the protottype chain 
// console.log(person1.__proto__);

// console.log(Person.prototype === person1.__proto__);

// console.log(person2.__proto__ === Person.prototype);
// console.log(person3.__proto__ === Person.prototype);







// const arr1 = [1,2,3,4,5,6];
// const arr2 = [1,2,3,4,5,6];
// const arr3 = [1,2,3,4,5,6];

// console.log(arr1);


// arr1.forEach((item)=>{
//     console.log(item*2);
// })
// arr2.forEach((item)=>{
//     console.log(item*2);
// })
// arr3.forEach((item)=>{
//     console.log(item*2);
// })


// const arr1 = [1,2,3,4,5,6];

// const arr1 = new Array(1,2,3,4,5,6);
// const arr2 = new Array(1,2,3,4,5,6);
// const arr3 = new Array(1,2,3,4,5,6);
// const arr4 = new Array(1,2,3,4,5,6);


// console.log(arr1.__proto__ === Array.prototype);
// console.log(arr2.__proto__ === Array.prototype);
// console.log(arr3.__proto__ === Array.prototype);
// console.log(arr4.__proto__ === Array.prototype);

// console.log(arr1);








// let person1 = {

//     name:"Utkarsh",
//     age:31
// }

// let person2= {

//     name:"Utkarsh",
//     age:31
// }

// console.log(person1);

// console.log(person1.__proto__=== Object.prototype);
// console.log(person2.__proto__=== Object.prototype);



function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName
}

Person.prototype.getFullName = function (){
    return this.firstName + " " + this.lastName;
}


const person1 = new Person("John","Doe");


console.log(person1.__proto__);
console.log(person1.__proto__ === Person.prototype );


console.log(person1.__proto__.__proto__);
console.log(person1.__proto__.__proto__.__proto__);
