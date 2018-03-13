"use strict";

const FruitTree = require('./fruit_tree');

class AppleTree extends FruitTree {
  constructor(name, age, height, matureAge, healthyStatus) {
    super();
    this._name = name;
    this._age = age;
    this._heigth = height;
    this._matureAge = matureAge;
    this._matureAge = 5;
    this._maxProduceAge = 14;
    this._dieAge = 15;
    this._maxGrowUp = 12;
  }
}

module.exports = AppleTree;
