// Static methods and properties belong to the class itself, not to instances of the class. They are defined using the static keyword.

// Static methods cannot access instance properties or methods directly
// Static methods are called on the class, not on instances
// Static properties are shared among all instances of the class


// class MathUtils {

//     static square(x){
//         return x * x;
//     }

//     static cube(x){
//         return x*x*x;
//     }

// }

// console.log(MathUtils.square(5));
// console.log(MathUtils.cube(10));




class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }


    //static factory method
    static fromObj(obj){
        return new Person(obj.firstName, obj.lastName);
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }


}

const personObj = { firstName: "John", lastName: "Doe" };

const person1 = Person.fromObj(personObj);

console.log(person1.getFullName());
