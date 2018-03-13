const {FruitTree, Fruit} = require("./fruit_tree.js");

class AppleTree extends FruitTree{
  constructor(age, height, matureAge, isHealthy) {
    super(age, height, matureAge, isHealthy, 25, 15, 55);
  }
}

class Apple extends Fruit{
  constructor() {
    super();
  }
}

module.exports = AppleTree
