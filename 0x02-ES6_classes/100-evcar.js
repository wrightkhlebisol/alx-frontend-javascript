/* eslint-disable no-underscore-dangle */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    if (typeof brand !== 'string') throw new TypeError('Brand must be a string');
    if (typeof motor !== 'string') throw new TypeError('Motor must be a string');
    if (typeof color !== 'string') throw new TypeError('Color must be a string');
    if (typeof range !== 'string') throw new TypeError('Range must be a string');

    super(brand, motor, color);

    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
