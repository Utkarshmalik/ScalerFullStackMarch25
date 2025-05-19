// class ClassName {
//     // Getter
//     get propertyName() {
//       // Return the value
//     }
  
//     // Setter
//     set propertyName(value) {
//       // Set the value
//     }
//   }

// Getters (get) allow you to access a property like a normal property, but behind the scenes, it actually calls a function.
// Setters (set) allow you to set a property like a normal assignment, but behind the scenes, it runs a function that handles how the value is stored.




// class Student{

//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }


//     set fullName(name){

//         const [first,last] = name.split(" ");

//         this.firstName  =first;
//         this.lastName = last;

//     }



// }

// const student1 = new Student("John","Doe");
// console.log(student1.fullName);


// student1.fullName = "Utkarsh Malik"; // (calls the setter)

// console.log(student1.fullName);




// # is used to declare variable as private 



class User{

    #age;

    constructor(age){
        this.#age = age;
    }

    get age(){
        return this.#age;
    }

    set age(value){

        if(value<0){

            console.log("Age cannot be negagtive");
            return;
        }

        this.#age = value;
    }

}

const user = new User(25);

console.log(user.age);

user.age = -5;

console.log(user.age);

user.age = 30;



// You can control how a property is read or modified, instead of letting users change it freely.
// You can later add complex operations inside getter/setter without changing external code that accesses the property.

