const FruitTree = require('./fruit_tree.js')

// console.log("---",obj)

class AppleTree extends FruitTree{

    // Initialize a new AppleTree
    constructor(name, age, height, matureAge, healthyStatus) {
      super(name, age, height, matureAge, healthyStatus);
    }
  
}


module.exports = AppleTree;
