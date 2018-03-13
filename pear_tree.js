const {FruitTree, Fruit} = require("./fruit_tree.js");

class PearTree extends FruitTree {
  constructor() {
    super(19, 6)
  }
}

class Pear extends Fruit {
  constructor() {
    super();
  }
}

module.exports = PearTree;
