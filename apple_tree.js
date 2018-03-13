const fruitTree = require('./fruit_tree.js')
var FruitTree = fruitTree.FruitTree
var Fruit = fruitTree.Fruit

class AppleTree extends FruitTree {
  constructor(name,age,height,matureAge,deadAge,healthyStatus) {
    super(name,age,height,matureAge,deadAge,healthyStatus)
  }

  randomGrowth(){
    return Math.random()*1
  }

  randomFruits(){
    return Math.ceil(Math.random()*30)+10
  }
}

module.exports = AppleTree

// console.log(`The tree is alive! :smile:`)
// let appleTree = new AppleTree('Apple')
// do {
//   appleTree.grow()
//   appleTree.produceMangoes()
//   appleTree.harvest()
//   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(2)} | Fruits harvested = ${appleTree.fruits.length} (${appleTree.harvested})`)
// } while (appleTree.healthyStatus !== false)
// console.log(`The tree has met its end! :sad:`)
