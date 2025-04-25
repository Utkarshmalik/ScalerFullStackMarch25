

// let a = 5;
// let b = a;

// b++;

// console.log(a);
// console.log(b);


// let person1 = {

//     name:"Utkarsh",
//     age:31
// } 


// let person2 = person1;


// person2.age++;

// console.log(person1.age);
// console.log(person2.age);



// let arr1 = [1, 2, 3, 4, [10, 12], 5, 6];


// let arr2 = arr1;

// arr2[0]++;

// console.log(arr1[0]);
// console.log(arr2[0]);



// A shallow copy copies the top-level properties of an object. If those properties are primitive types (like number, string, boolean), their values are copied.
// But if a property is a reference type (like another object or array), only the reference is copied — not the actual object.



// const original = {
//     name: "Utkarsh",
//     address: {
//       city: "Gurgaon"
//     }
//   };
  
//   const copyOfOriginal = {...original};

//   copyOfOriginal.name = "Rahul";

//   console.log(original.name);
//   console.log(copyOfOriginal.name);

//   copyOfOriginal.address.city="Banglore";

//   console.log(original.address.city);
//   console.log(copyOfOriginal.address.city);



// let arr1 = [1, 2, 3, 4, [10, 12], 5, 6];


// let arr2 = [...arr1]

// arr2[4][0]++;


// console.log(arr1[4][0]);
// console.log(arr2[4][0]);




// Object.assign(target, source)



// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//    },
// };

// let copiedObject = Object.assign({},person);

// copiedObject.lastName = "Odinson";
// console.log(person.lastName);
// console.log(copiedObject.lastName);

// copiedObject.address.city = "New York";

// console.log(person.address.city);
// console.log(copiedObject.address.city);





let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
};


  
 let copiedObject =  JSON.parse(JSON.stringify(person));

 copiedObject.lastName = "Odinson";
console.log(person.lastName);
console.log(copiedObject.lastName);

copiedObject.address.city = "New York";

console.log(person.address.city);
console.log(copiedObject.address.city);

