const {FruitTree, Fruit} = require("./fruit_tree.js");

class MangoTree extends FruitTree {
  constructor() {
    super(18, 7)
  }
}

class Mango extends Fruit {
  constructor() {
    super();
  }
}

module.exports = MangoTree;
