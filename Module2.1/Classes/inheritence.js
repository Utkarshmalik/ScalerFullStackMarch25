class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
      this.isRunning = false;
    }
  
    start() {
      this.isRunning = true;
      return `${this.make} ${this.model} started`;
    }
  
    stop() {
      this.isRunning = false;
      return `${this.make} ${this.model} stopped`;
    }
  
    getInfo() {
      return `${this.make} ${this.model}`;
    }
  }
  

  class Car extends Vehicle {

    constructor(make, model,numDoors){

        super(make,model);

        this.numDoors = numDoors;

    }

  }


  class EletricCar extends Car {

    constructor(make,model,numDoors,batteryCapacity){
      super(make,model,numDoors);
      this.batteryCapacity = batteryCapacity;
    }

    getInfo(){
      return `${super.getInfo()}, ${this.batteryCapacity}kWh battery`
    }

  }

  class Bike extends Vehicle {

    constructor(make, model,standCompany){

        super(make,model);

        this.standCompany = standCompany;

    }

  }


  // const car = new Car("Toyota","Corolla",4);

  // console.log(car);

  // console.log(car.start())
  // console.log(car.getInfo());

//   The class that inherits is called the child class or subclass
// The class being inherited from is called the parent class or superclass

const myBike = new Bike("Yamaha","R15","Electra");

// console.log(myBike.start());


const myTesla = new EletricCar("Tesla","Model 3",4,75);

console.log(myTesla.getInfo());




// The super Keyword
// The super keyword is used to call methods on the parent class:

// super() calls the parent constructor
// super.methodName() calls a method on the parent class
