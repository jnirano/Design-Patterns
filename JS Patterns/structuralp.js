//Example of Structural Pattern
class Car {
	constructor(doors, engine, color) {
		{
			this.doors = doors;
			this.engine = engine;
			this.color = color;
		}
	}
}

class CarFactory {
	createCar(type) {
		switch (type) {
			case 'civic':
				return new Car(6, 'V6', 'yellow');
			case 'honda':
				return new Car(2, 'V7', 'pink');
			case 'benz':
				return new Car(8, 'V9', 'lemon');
		}
	}
}

class Suv {
	constructor(doors, engine, color) {
		{
			this.doors = doors;
			this.engine = engine;
			this.color = color;
		}
	}
}

class SuvFactory {
	createCar(type) {
		switch (type) {
			case 'cx6':
				return new Car(6, 'V6', 'yellow');
			case 'mazda':
				return new Car(2, 'V7', 'pink');
			case 'toyota':
				return new Car(8, 'V9', 'lemon');
		}
	}
}

let carMixin = {
   revEngine() {
      console.log(`The ${this.engine} engine is doing Vroom Vroom!! `);
   }
}

const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

const autoManufacturer = (type, model) => {
	switch (type) {
		case 'suv':
			return carFactory.createCar(model);
		case 'car':
			return suvFactory.createCar(model);
	}
};

object.assign(Car.prototype, carMixin);

const honda = autoManufacturer('car', 'honda');
honda.revEngine();
