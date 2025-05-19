
let person1 = { 

    firstName : 'John',
    lastName : 'Doe',
    greet : function (){

        console.log(`Hello from ${this.firstName} ${this.lastName}`);
    }
}

let person2 = { 

    firstName : 'Utkarsh',
    lastName : 'Malik',
    greet : function (){

        console.log(`Hello from ${this.firstName} ${this.lastName}`);
    }
}


person1.greet();
person2.greet();
