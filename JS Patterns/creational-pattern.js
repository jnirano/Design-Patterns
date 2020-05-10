// Testing setup
// console.log('Hello world!!');

// //Function as a first class citizen example
// const multiply = (x, y) => {
//    return x * y + (x -2);
// }
// let answer = multiply(5, 4);
// console.log(answer);


// //Callback function example

// const calculate() => {
//    return 2 * 3;
// }

// const printCalculation(callback) => {
//    console.log(callback());
// }

// printCalculation(calculate());




// EXAMPLES OF CREATIONAL DESIGN PATTERNS:

//Example of Class design Pattern or Prototype class pattern:
// class Car {
//    constructor (doors, engine, color) {
//       this.doors = doors;
//       this.engine = engine;
//       this.color = color;
//    }
// }
// const civic = new Car(4, 'V6', 'blue');
// console.log(civic);

/*
Example of Constructor pattern:-
we leverage on class created to create an extended class from it. Whenever you want to create multiple category of sub class use the constructor pattern.
*/
// class SUV extends Car {
//    constructor (doors, engine, color) {
//       super (doors, engine, color);
//          this.wheels = '4w';
//    }
// }
// const cx5 = new SUV(5, 'V8', 'green');
// console.log(cx5);


/*
Example of Singleton Pattern 
It allow only one instance of the class to be created
*/
// let instance = null;

// class Car {
//    constructor(doors, engine, color) {
//       if (!instance) {
//          this.doors = doors;
//          this.engine = engine;
//          this.color = color;
//          instance = this;
//       } else {
//          return instance;
//       }
//    }
// }
// const civic = new Car(6, 'V6', 'yellow');
// const honda = new Car(2, 'V7', 'pink');

// console.log(civic);
// console.log(honda);


// // EXAMPLE OF FACTORY PATTERN
// class Car {
//    constructor(doors, engine, color) {
//       {this.doors = doors;
//       this.engine = engine;
//       this.color = color;}
//    }
// }

// class CarFactory {
//    createCar(type) {
//       switch(type){
//          case 'civic':
//             return new Car(6, 'V6', 'yellow')
//          case 'honda':
//             return new Car(2, 'V7', 'pink')
//          case 'benz':
//             return new Car(8, 'V9', 'lemon')
//       }
//    }
// }

// const factory = new carFactory();
// const myHonda = factory.createCar('honda');

// console.log(honda);



// EXAMPLE OF Abstract FACTORY PATTERN
class Car {
   constructor(doors, engine, color) {
      {this.doors = doors;
      this.engine = engine;
      this.color = color;}
   }
}

class CarFactory {
   createCar(type) {
      switch(type){
         case 'civic':
            return new Car(6, 'V6', 'yellow')
         case 'honda':
            return new Car(2, 'V7', 'pink')
         case 'benz':
            return new Car(8, 'V9', 'lemon')
      }
   }
}

class Suv {
   constructor(doors, engine, color) {
      {this.doors = doors;
      this.engine = engine;
      this.color = color;}
   }
}

class SuvFactory {
   createCar(type) {
      switch(type){
         case 'cx6':
            return new Car(6, 'V6', 'yellow')
         case 'mazda':
            return new Car(2, 'V7', 'pink')
         case 'toyota':
            return new Car(8, 'V9', 'lemon')
      }
   }
}

const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

const autoManufacturer = (type, model) => {
   switch(type) {
      case 'suv':
         return carFactory.createCar(model);
      case 'car':
         return suvFactory.createCar(model);
   }
}

const cx6 = autoManufacturer('suv', 'cx6');

console.log(cx6);