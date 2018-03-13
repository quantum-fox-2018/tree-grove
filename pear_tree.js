'use strict'
const FruitTree = require('./fruit_tree.js');

class PearTree extends FruitTree {
  constructor(name, age, height, matureAge, healthyStatus) {
    super(name, age, height, matureAge, healthyStatus, 20, 5.0);
  }
}

module.exports = PearTree
