/* eslint-disable no-underscore-dangle */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') throw new TypeError('Amount should be an integer');
    if (!(currency instanceof Currency)) throw new TypeError('Currency should be an object');

    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amount) {
    if (typeof amount !== 'number') throw new TypeError('Amount should be an integer');
    this._amount = amount;
  }

  set currency(currency) {
    if (typeof currency !== 'object') throw new TypeError('Currency should be an object');
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') throw new TypeError('Currency should be an integer');
    if (typeof convertRate !== 'object') throw new TypeError('Conversion rate should be an integer');

    return amount * conversionRate;
  }
}
