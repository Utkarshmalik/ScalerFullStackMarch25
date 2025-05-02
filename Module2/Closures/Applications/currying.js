// Currying involves splitting up a function that accepts multiple arguments into several functions that only accept one parameter each.


// It allows you to provide some arguments upfront while delaying the provision of others.

// function getFirstName(firstName){

//    console.log("I have got your first Name");

//    return function getLastName(lastName){

//        console.log("I have got Your last Name");

//        return function greeter(){
//                 console.log(`Hi I am ${firstName} ${lastName}`);
//        }
//    }
// }

// getFirstName("John")("Doe")();

// function sum(a, b, c) {
//     return a+b+c;
// }

// sum(1,2,3);


// function sum(a){

//     return function (b){

//         return function(c){

//             return a+b+c;
//         }
//     }
// }

// sum(1)(2)(3);





// function multiply(a) {
//     return function(b) {
//       return function(c) {
//         return a * b * c;
//       };
//     };
//   }

  
//   const mulitplyBy2 = multiply(2);


//   const multiplyBy2And3 = mulitplyBy2(3);

//   const mulitplyBy2And5 = mulitplyBy2(5);


//   console.log(multiplyBy2And3(4));






// function handleClick(button) {
//     return function(event) {
//       console.log(`Button ${button} clicked!`);
//     };
//   }
  
//   const handleSubmit = handleClick('Submit');
//   const handleCancel = handleClick('Cancel');
  
//   document.querySelector('#submitButton').addEventListener('click', handleSubmit);
//   document.querySelector('#cancelButton').addEventListener('click', handleCancel);