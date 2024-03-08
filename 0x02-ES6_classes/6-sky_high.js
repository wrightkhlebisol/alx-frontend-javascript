/* eslint-disable no-underscore-dangle */
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof sqft !== 'number') throw new TypeError('Amount should be an integer');
    if (typeof floors !== 'number') throw new TypeError('Amount should be an integer');
    super(sqft);
    this._floors = floors;
    this._sqft = sqft;
  }

  get floors() {
    return this._floors;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
