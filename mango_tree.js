"use strict";

const FruitTree = require('./fruit_tree');

class MangoTree extends FruitTree {
  constructor(name, age, height, matureAge, healthyStatus) {
    super();
    this._name = name;
    this._age = age;
    this._heigth = height;
    this._matureAge = matureAge;
    this._healthyStatus = healthyStatus;
    this._maxProduceAge = 20;
    this._dieAge = 10;
    this._maxGrowUp = 15;
  }
}

module.exports = MangoTree;
