const fruitTree = require('./fruit_tree.js')
var FruitTree = fruitTree.FruitTree
var Fruit = fruitTree.Fruit

class MangoTree extends FruitTree {
  constructor(name,age,height,matureAge,deadAge,healthyStatus) {
    super(name,age,height,matureAge,deadAge,healthyStatus)
  }
}

module.exports = MangoTree

// console.log(`The tree is alive! :smile:`)
// let mangoTree = new MangoTree('Mango')
// do {
//   mangoTree.grow()
//   mangoTree.produceMangoes()
//   mangoTree.harvest()
//   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(2)} | Fruits harvested = ${mangoTree.fruits.length} (${mangoTree.harvested})`)
// } while (mangoTree.healthyStatus !== false)
// console.log(`The tree has met its end! :sad:`)
