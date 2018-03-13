var FruitTree = require('./fruit_tree.js');

//MangoTree
module.exports = class AppleTree extends FruitTree {
  constructor(treeName, plantedAge, plantedheight, MatureAge, healthyStatus){
    super();
    this.treeName = treeName;//'Mango';
    this.maxAge = 17;
    this._age = plantedAge; //plantedAge
    this._height = plantedheight;
    this.mature = MatureAge;
    this.healthStatus = healthyStatus;
  }
}

// let mango = new MangoTree();
// console.log(mango);

//Test Case Apple
// let appleTree = new AppleTree(2, '1.6', 4, true);
// console.log(`${appleTree.treeName} tree is alive! :smile:`);
// do {
//   appleTree.grow();
//   appleTree.produceFruits();
//   appleTree.harvest();
//   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`);
// } while(appleTree.healthStatus != false);
//
// console.log(`${appleTree.treeName} tree has met its end. :sad:`);
