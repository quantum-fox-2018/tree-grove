const {FruitTree, Fruit} = require("./fruit_tree.js");

class PearTree extends FruitTree{
  constructor(age, height, matureAge, isHealthy) {
    super(age, height, matureAge, isHealthy, 30, 20, 60);
  }
}

class Pear extends Fruit{
  constructor() {
    super();
  }
}

module.exports = PearTree
