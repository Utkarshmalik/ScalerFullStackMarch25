
function Person(firstName, lastName){

    this.firstName = firstName;
    this.lastName = lastName

    this.getFullName = function (){
        return this.firstName + " " + this.lastName;
    }
}



const person1 = new Person("John","Doe");
const person2 = new Person("Utkarsh","Malik");
const person3 = new Person("Vandit","Patel");

console.log(person1);
console.log(person2);
console.log(person3);

console.log(person1.getFullName());
console.log(person2.getFullName());
console.log(person3.getFullName());




//the value of this keyword inside constructor fucntions to the new object/instance that is geting 
//created