
// function Person(name){

//     this.name = name;

// }

// Person.prototype.getName = function(){
//     return this.name;
// }


// var john = new Person("John Doe");
// var rahul = new Person("Rahul Doe");




// console.log(john.getName());
// console.log(rahul.getName());

// classes 



console.log(Person);

class Person{

    constructor(name){
        this.name=name;
    }

    getName(){
        return this.name;
    }

    static sayHi(){
        console.log("Hii");
    }

}

var john = new Person("John Doe");
console.log(john.getName());




//syntatic sugers

