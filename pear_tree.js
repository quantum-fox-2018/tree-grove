const fruitTree = require('./fruit_tree.js')
var FruitTree = fruitTree.FruitTree
var Fruit = fruitTree.Fruit

class PearTree extends FruitTree {
  constructor(name,age,height,matureAge,deadAge,healthyStatus) {
    super(name,age,height,matureAge,deadAge,healthyStatus)
  }

  randomGrowth(){
    return Math.random()*1
  }

  randomFruits(){
    return Math.ceil(Math.random()*25)+10
  }
}

module.exports = PearTree

// console.log(`The tree is alive! :smile:`)
// let pearTree = new PearTree('Pear')
// do {
//   pearTree.grow()
//   pearTree.produceMangoes()
//   pearTree.harvest()
//   console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height.toFixed(2)} | Fruits harvested = ${pearTree.fruits.length} (${pearTree.harvested})`)
// } while (pearTree.healthyStatus !== false)
// console.log(`The tree has met its end! :sad:`)
