const ObjClass = require('./fruit_tree.js');
let FruitTree = ObjClass.FruitTree;
let Fruit = ObjClass.Fruit;

class PearTree extends FruitTree {

}

// let newObjPearTree = {
//     age: 0,
//     height: 0,
//     max_fruit: 1000,
//     current_fruit: 0,
//     picked_fruit: 0,
//     status: true,
//     mature_age: 7,
//     dying_age: 20
// }

// let pearTree = new PearTree(newObjPearTree);

// console.log('=======================PearTree===========================');
// do {
//     pearTree.grow();
//     pearTree.produceFruites();
//     pearTree.harvest();
//     console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height}m | Fruits harvested = ${pearTree.goodFruit+pearTree.badFruit} (${pearTree.goodFruit} good, ${pearTree.badFruit} bad)`)
// } while (pearTree.healtyStatus == true)
  

module.exports = PearTree;
