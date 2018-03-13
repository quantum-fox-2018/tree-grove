var FruitTree = require('./fruit_tree.js');

//MangoTree
module.exports = class MangoTree extends FruitTree {
  constructor(treeName, plantedAge, plantedheight, MatureAge, healthyStatus){
    super();
    this.treeName = treeName;//'Mango';
    this.maxAge = 20;
    this._age = plantedAge; //plantedAge
    this._height = plantedheight;
    this.mature = MatureAge;
    this.healthStatus = healthyStatus;
  }
}

// let mango = new MangoTree();
// console.log(mango);

//Test Case Manggo
// let mangoTree = new MangoTree(1, '1.2', 3, true);
// console.log(`${mangoTree.treeName} tree is alive! :smile:`);
// do {
//   mangoTree.grow();
//   mangoTree.produceFruits();
//   mangoTree.harvest();
//   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`);
// } while(mangoTree.healthStatus != false);
//
// console.log(`${mangoTree.treeName} tree has met its end. :sad:`);
