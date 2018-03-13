const FruitTree = require('./fruit_tree.js');

class PearTree extends FruitTree{

    // Initialize a new PearTree
    constructor(name, age, height, matureAge, healthyStatus) {
      super(name, age, height, matureAge, healthyStatus);
    }
  
}
  


module.exports = PearTree;