'use strict'
const FruitTree = require('./fruit_tree.js');

class MangoTree extends FruitTree {
  constructor(name, age, height, matureAge, healthyStatus) {
    super(name, age, height, matureAge, healthyStatus, 12, 4.9);
  }
}

module.exports = MangoTree
