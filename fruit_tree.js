class FruitTree {
  constructor(name, age, height, matureAge, healthyStatus, maxAge, maxHeight) {
    this._name = name;
    this._age = age;
    this._height = height;
    this._matureAge = matureAge;
    this._maxAge = maxAge;
    this._maxHeight = maxHeight;
    this._healthyStatus = healthyStatus;
  }

  set age(value) {
    this._age = value;
  }

  set healthyStatus(value) {
    this._healthyStatus = value;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  get maxAge() {
    return this._maxAge;
  }

  get matureAge() {
    return this._matureAge;
  }

  get healthyStatus() {
    return this._healthyStatus;
  }
}

module.exports = FruitTree
