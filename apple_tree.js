const ObjClass = require('./fruit_tree.js');
let FruitTree = ObjClass.FruitTree;
let Fruit = ObjClass.Fruit;

class AppleTree extends FruitTree {

}

// let newObjAppleTree = {
//     age: 0,
//     height: 0,
//     max_fruit: 1000,
//     current_fruit: 0,
//     picked_fruit: 0,
//     status: true,
//     mature_age: 2,
//     dying_age: 10
// }

// let appleTree = new AppleTree(newObjAppleTree);

// console.log('=======================AppleTree===========================');
// do {
//     appleTree.grow();
//     appleTree.produceFruites();
//     appleTree.harvest();
//     console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height}m | Fruits harvested = ${appleTree.goodFruit+appleTree.badFruit} (${appleTree.goodFruit} good, ${appleTree.badFruit} bad)`)
// } while (appleTree.healtyStatus == true)
  

module.exports = AppleTree;