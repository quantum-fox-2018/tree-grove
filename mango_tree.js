const FruitTree = require('./fruit_tree.js')

class MangoTree extends FruitTree{

  // Initialize a new MangoTree
  constructor(name, age, height, matureAge, healthyStatus) {
    super(name, age, height, matureAge, healthyStatus);
  }

}

module.exports = MangoTree;