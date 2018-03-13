"use strict";

const FruitTree = require('./fruit_tree');

class PearTree extends FruitTree {
  constructor(name, age, height, matureAge, healthyStatus) {
    super();
    this._name = name;
    this._age = age;
    this._heigth = height;
    this._matureAge = matureAge;
    this._maxProduceAge = 18;
    this._dieAge = 5;
    this._maxGrowUp = 15;
  }
}


module.exports = PearTree;
