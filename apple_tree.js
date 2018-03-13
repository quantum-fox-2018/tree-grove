'use strict'
const {FruitTree, Fruit} = require('./fruit_tree.js');

class AppleTree extends FruitTree {
  constructor(name, age, height, matureAge, healthyStatus) {
    super(name, age, height, matureAge, healthyStatus, 20, 4.5);
  }
}

class Apple extends Fruit {
  constructor() {
    super();
  }
}

module.exports = {
  AppleTree,
  Apple
}
