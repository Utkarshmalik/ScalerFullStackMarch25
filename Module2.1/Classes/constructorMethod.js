
// class Car {

//     constructor(brand,model,year){

//         this.brand=brand;
//         this.model = model;
//         this.year = year;
//         this.mileage = 0; //Default Value 
//     }

// }

// const myCar = new Car("Toyota", "Corolla", 2020);
// console.log(myCar.brand);


class Point {
    constructor(x = 1, y = 2) {
      this.x = x;
      this.y = y;
    }
  
    getPosition() {
      return `(${this.x}, ${this.y})`;
    }
  }
  

  const origin = new Point(10);
  console.log(origin);

  const point = new Point(10,20);
  console.log(point);