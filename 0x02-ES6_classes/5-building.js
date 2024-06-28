/* eslint-disable no-new */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-underscore-dangle */
// export default class Building {
//   constructor(sqft) {
//     // if (new.target === Building) {

//     // }

//     if (typeof sqft !== 'number') throw new TypeError('Amount should be an integer');

//     this._sqft = sqft;
//   }

//   get sqft() {
//     return this._sqft;
//   }

//   // eslint-disable-next-line class-methods-use-this
//   evacuationWarningMessage() {
//     throw new Error('Class extending Building must override evacuationWarningMessage');
//   }
// }
class AbstractClass {
  constructor() {
    // if (new.target === AbstractClass) {
    throw new Error('Cannot instantiate an abstract class.');
    // }
  }

  abstractMethod() {
    throw new Error("Method 'abstractMethod' must be implemented.");
  }
}

class ConcreteClass extends AbstractClass {
  // abstractMethod() {
  constructor() {
    super();
    // console.log('ConcreteClass');
  }
  // super();
  //   // Implement the abstract method
  //   console.log('Implemented abstract method');
  // }
}

const obj = new ConcreteClass();
// obj.abstractMethod(); // Outputs: "Implemented abstract method"
