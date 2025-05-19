

// var x = 5;
// var y =6;

//this -> window object 

// For Global Execution context this will be a window object.

// console.log(this.x);





// let user = {

//     name:"Alice",
//     greet:function(){
//         console.log(`Hello from ${this.name}`);
//     }

// }

// user.greet();


// let cap = {

//     firstName:"Steve",
//     sayHi:function(){
//         console.log(`Hi from ${this.firstName}`);
//     }
// }

// cap.sayHi();
// var saHiFn = cap.sayHi;
// window.saHiFn();





 




let cap = {
    firstName : "Steve",
    sayHi : function(){
        console.log("53", this.firstName);
        const iAmInner = function(){
            console.log("55",this.firstName);
        }
        iAmInner();
    }
}
cap.sayHi();




// function add(a,b){
//     console.log(a+b);
// }

// const add = (a,b)=>{
//     console.log(this);
//     return a+b;
// }

// add(4,6);




// let cap = {
//     firstName : "Steve",
//     sayHi : ()=>{
//         console.log("hi from", this.firstName);
//     }
// }
// cap.sayHi();


//Arrow functions are lexically scoped 




// let cap = {
//     firstName : "Steve",
//     sayHi : function(){
//         console.log("53", this.firstName);
//         const iAmInner = () => {
//             console.log("55",this.firstName);
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();





// var firstName = "Loki"
// let cap = {
//     firstName : "Steve",
//     sayHi : () => {
//         console.log("53", this.firstName);
//         const iAmInner = () => {
//             console.log("55", this.firstName);
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();






// var firstName = "Loki"
// let cap = {
//     firstName : "Steve",
//     sayHi : function(){
//         console.log("53", this.firstName);
//         const subInner = () => {
//             console.log("54", this.firstName);
//             const iAmInner = ()=> {
//                 console.log("55", this.firstName);
//             }
//             iAmInner();
//         }
//         subInner();
//     }
// }
// cap.sayHi();



// var firstName = "Loki"
// let cap = {
//     firstName : "Steve",
//     sayHi : function(){
//         console.log("53", this.firstName);
//         const subInner = () => {
//             console.log("54", this.firstName);
//             function iAmInner() {
//                 console.log("55", this.firstName);
//             }
//             iAmInner();
//         }
//         subInner();
//     }
// }
// cap.sayHi();





// For Global Execution context this will be a window object.

// For Execution context created with method call(calling with object), this will be that object.

// For Execution context created with a function call(calling without object), this will be that window.

//Arrow functions inherit this from their surrounding scope.

