/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    if (typeof length !== 'number') throw new TypeError('Length must be a string');
    if (typeof students !== 'object') throw new TypeError('Students must be an object');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get _length() {
    return this._length;
  }

  set _length(length) {
    this._length = length;
  }

  get _name() {
    return this._name;
  }

  set _name(name) {
    this._name = name;
  }

  get _students() {
    return this._students;
  }

  set _students(students) {
    this._students = students;
  }
}
