'use strict'
const {FruitTree, Fruit} = require('./fruit_tree.js');

class PearTree extends FruitTree {
  constructor(name, age, height, matureAge, healthyStatus) {
    super(name, age, height, matureAge, healthyStatus, 20, 5.0);
  }
}

class Pear extends Fruit{
  constructor() {
    super();
  }
}

module.exports = {
  PearTree,
  Pear
}
