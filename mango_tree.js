'use strict'
const {FruitTree, Fruit} = require('./fruit_tree.js');

class MangoTree extends FruitTree {
  constructor(name, age, height, matureAge, healthyStatus) {
    super(name, age, height, matureAge, healthyStatus, 12, 4.9);
  }
}

class Mango extends Fruit {
  constructor() {
    super();
  }
}

module.exports = {
  MangoTree,
  Mango
};
