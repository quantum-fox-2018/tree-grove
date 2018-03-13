"use strict"
class FruitTree {
  constructor() {
    this._name = "";
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._maxFruits = this._maxFruits;
    this._harvested = "";
    this._healthyStatus = true;
    this._maxAge = this._maxAge;
    this._maxHeight = this._maxHeight;
    this._matureAge = this._matureAge;
  }

  set name(name) {
    this._name = name;
  }

  set age(age) {
    this._age = age;
  }

  set height(height) {
    this._height = height;
  }

  set healthyStatus(healthyStatus) {
    this._healthyStatus = healthyStatus;
  }

  set maxFruits(max) {
    this._maxFruits = max;
  }

  set maxAge(max) {
    this._maxAge = max;
  }

  set maxHeight(max) {
    this._maxHeight = max;
  }

  set matureAge(age) {
    this._matureAge = age;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
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

  // Get current states here
  // Grow the tree
  grow() {
    this._age += 1;
    let randomTinggi = Math.floor(Math.random() * 3) + 1;
    this._height += randomTinggi;
    if(this.age >= this._maxAge || this.height >= this._maxHeight) {
      this._healthyStatus = false;
    }
  }

  // Produce some mangoes
  produceFruits() {
    if(this._age > this._matureAge) {
      let maxFruits = Math.floor(Math.random() * Number(this._maxFruits)) + 1;
      let fruit;
      for(let i = 0; i < maxFruits; i++) {
        fruit = new Fruit();
        this._fruits.push(fruit);
      }
    }
  }

  // Get some fruits
  harvest() {
    let bad = this.fruits.filter(function(a) {
      return a.quality == 0;
    }).length;
    let good = this.fruits.filter(function(a) {
      return a.quality == 1;
    }).length;
    this._harvested = `${this.fruits.length} (${good} good, ${bad} bad)`;
    this._fruits = [];
  }
}

class Fruit {
  // Produce a fruit
  constructor() {
    this.quality = Math.round(Math.random());
  }
}

module.exports = {
  FruitTree, Fruit
}
