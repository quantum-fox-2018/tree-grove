var FruitTree = require('./fruit_tree.js');

//MangoTree
module.exports = class PearTree extends FruitTree {
  constructor(treeName, plantedAge, plantedheight, MatureAge, healthyStatus){
    super();
    this.treeName = treeName;//'Mango';
    this.maxAge = 22;
    this._age = plantedAge; //plantedAge
    this._height = plantedheight;
    this.mature = MatureAge;
    this.healthStatus = healthyStatus;
  }
}

// let mango = new MangoTree();
// console.log(mango);

// //Test Case Pear
// let pearTree = new PearTree(7, '2', 15, true);
// console.log(`${pearTree.treeName} tree is alive! :smile:`);
// do {
//   pearTree.grow();
//   pearTree.produceFruits();
//   pearTree.harvest();
//   console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} m | Fruits harvested = ${pearTree.harvested}`);
// } while(pearTree.healthStatus != false);
//
// console.log(`${pearTree.treeName} tree has met its end. :sad:`);
