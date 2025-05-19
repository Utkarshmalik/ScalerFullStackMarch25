

// class Rectangle {

//     constructor(height,width){
//         this.height = height;
//         this.width = width;
//     }

// }   

// Anonymous class expression

// const Rectangle = class {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   };


// Named class expression

// const Square = class Square {

//     constructor(side){
//         this.side = side;
//     }
// }




var student = new Student("John","Doe");

console.log(student);


//Invalid 
// student.sayHi();

Student.sayHi();


console.log(student.getFullName());


// What is the difference between a class declaration and a class expression?



class Student {

    //Class Field (property)
    grade = "A";


    //Constrcutor
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Method
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }


    //static method 
    static fromObj(obj){
        return new Student(obj.firstName, obj.lastName);
    }

    static  sayHi(){
        console.log("Hii");
    }

}
