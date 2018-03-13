class FruitTree {
  constructor(name, age, height, matureAge, healthyStatus, maxAge, maxHeight) {
    this._name = name;
    this._age = age;
    this._height = height;
    this._matureAge = matureAge;
    this._maxAge = maxAge;
    this._maxHeight = maxHeight;
    this._healthyStatus = healthyStatus;
    this._fruits = [];
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

  get harvested() {
    return this._harvested;
  }

  grow() {
    let growthHeightNum = Math.random() * (0.4 - 0.2) + 0.4;

    // age
    this._age += 1;
    if (this._age === this._maxAge) {
      this._healthyStatus = false;
    }
    // height
    this._height += growthHeightNum;
    if (this._age > this._matureAge || this._height > this._maxHeight) {
      this._height = this._maxHeight;
    }
  }

  produceFruit() {
    let quantity = Math.floor(Math.random() * 7);

    for (let i = 0; i < quantity; i++) {
      let quality = Math.floor(Math.random() * 2);
      if (quality == 0) {
        quality = `Bad`;
        let fruit = new Fruit(quality);
        this._fruits.push(fruit);
      } else {
        quality = `Good`;
        let fruit = new Fruit(quality);
        this._fruits.push(fruit);
      }
    }
  }
}

class Fruit {
  constructor(quality) {
    this._fruitQuality = quality
  }
}

module.exports = {
  FruitTree, Fruit
}
