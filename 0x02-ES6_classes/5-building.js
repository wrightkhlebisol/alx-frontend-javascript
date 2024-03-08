/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    if (typeof amount !== 'number') throw new TypeError('Amount should be an integer');
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

	evacuationWarningMessage()
}
