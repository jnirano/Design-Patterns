
// //Example of ITERATOR PATTERN
// newsFeed = [
//    {
//       type: 'top-headlines',
//       query: 'sources=bbc-news'
//    },
//    {
//       type: 'Backend',
//       query: 'domains=techcrunch.com&language=en'
//    },
//    {
//       type: 'Technology',
//       query: 'domains=comicbookmovie.com&language=en'
//    }
// ]

// for (let feed of newsFeed) {
//    console.log(feed.type);
// }


// //Example of Strategy Pattern:
// class Car {
//    constructor(doors, engine, color) {
//       this.doors = doors;
//       this.engine = engine;
//       this.color = color;
//    }
// }

// class SUV extends Car {
//    constructor(doors, engine, color) {
//       super(doors, engine, color);
//       this.wheels = 4;
//    }
// }

// //The Strategy Patterns occurs here
// const civic = new Car(4, 'V6', 'grey');
// const cx5 = new SUV(4, "V8", 'red');

// console.log(civic);
// console.log(cx5);


//Example of Mediator Pattern
class TrafficTower {
   constructor() {
      this.airplanes = [];
   }

   requestPositions() {
      return this.airplanes.map(airplane => {
         return airplane.position;
      });
   }
}

class Airplane {
   constructor(position, trafficTower) {
      this.position = position;
      this.trafficTower = trafficTower;
      this.trafficTower.airplanes.push(this);
   }

   requestPositions() {
      return this.trafficTower.requestPositions();
   }
}
