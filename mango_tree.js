const ObjClass = require('./fruit_tree.js');
let FruitTree = ObjClass.FruitTree;
let Fruit = ObjClass.Fruit;

class MangoTree extends FruitTree {

} 

// let newObjMangoTree = {
//     age: 0,
//     height: 0,
//     max_fruit: 1000,
//     current_fruit: 0,
//     picked_fruit: 0,
//     status: true,
//     mature_age: 4,
//     dying_age: 10
// }

// let mangoTree = new MangoTree(newObjMangoTree);

// console.log('=======================MangoTree===========================');
// do {
//     mangoTree.grow();
//     mangoTree.produceFruites();
//     mangoTree.harvest();
//     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height}m | Fruits harvested = ${mangoTree.goodFruit+mangoTree.badFruit} (${mangoTree.goodFruit} good, ${mangoTree.badFruit} bad)`)
// } while (mangoTree.healtyStatus == true)


module.exports = MangoTree;
  
  