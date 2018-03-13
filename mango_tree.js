const {FruitTree, Fruit} = require("./fruit_tree.js");

class MangoTree extends FruitTree{
  constructor(age, height, matureAge, isHealthy) {
    super(age, height, matureAge, isHealthy, 20, 10, 50);
  }
}

class Mango extends Fruit{
  constructor() {
    super();
  }
}

module.exports = MangoTree
