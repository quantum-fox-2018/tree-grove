const {FruitTree, Fruit} = require("./fruit_tree.js");

class AppleTree extends FruitTree {
  constructor() {
    super(15, 5);
  }
}

class Apple extends Fruit {
  constructor(fruitstat) {
    super(fruitstat);
  }
}

module.exports = AppleTree;
