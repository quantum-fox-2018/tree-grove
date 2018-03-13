'use strict'
let trees = require('../../day1/mango-tree/fruitTrees.js')
let fruitTrees = trees.FruitTrees
let MangoTree = trees.MangoTree
let AppleTree = trees.AppleTree
let PearTree = trees.PearTree

class TreeGrove {
  constructor() {
    this.trees = []
  }

  inputTree(name, age, height, matureAge, healthyStatus) {
    if(name == "MangoTree") {
      this.trees.push(new MangoTree(name, age, height, matureAge, healthyStatus))
    } else if (name == "AppleTree") {
      this.trees.push(new AppleTree(name, age, height, matureAge, healthyStatus))
    } else if (name == "PearTree") {
      this.trees.push(new PearTree(name, age, height, matureAge, healthyStatus))
    }
  }

  showAge() {
    let trees = this.trees
    console.log('Berikut data umur pohon:')
    for(let i=0; i<trees.length; i++) {
      console.log(trees[i]._age)
    }
  }

  showTrees() {
    let trees = this.trees
    console.log('Berikut daftar nama pohon:')
    for(let i=0; i<trees.length; i++) {
      console.log(trees[i]._name)
    }
  }

  mature_trees() {
    let trees = this.trees
    console.log('Berikut daftar nama pohon yang sudah memasuki masa tumbuh:')
    for(let i=0; i<trees.length; i++) {
      if(trees[i]._age >= trees[i]._matureAge) {
        console.log(trees[i]._name)
      }
    }
  }

  dead_trees() {
    let trees = this.trees
    console.log('Berikut daftar nama pohon yang sudah mati:')
    for(let i=0; i<trees.length; i++) {
      if(trees[i]._healtyStatus == false) {
        console.log(trees[i]._name)
      }
    }
  }

  nextYear() {
    let trees = this.trees
    for(let i=0; i<trees.length; i++) {
      trees[i].grow()
    }
  }

}

var grove = new TreeGrove()
// input your trees data !

grove.inputTree("MangoTree", 3, 1.8, 7,true)
grove.inputTree("MangoTree", 5, 2.4, 12,true)
grove.inputTree("AppleTree", 4, 1.2, 5,true)
grove.inputTree("PearTree", 7, 2, 15,true)
// console.log(grove)
grove.showAge()
// next year
grove.nextYear()

// show trees age
grove.showAge()

// show trees
grove.showTrees()

// show trees
grove.mature_trees()

// // show trees
grove.dead_trees()
