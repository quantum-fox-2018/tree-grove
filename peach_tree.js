const FruitTree = require('./fruit_tree.js')
const Peach = require('./peach.js')

class PeachTree extends FruitTree{
  constructor(name,age,height,mature,healthyStatus) {
    super(name,age,height,mature,healthyStatus)
    this._maxAge=20
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height
  }


  get healtyStatus() {
    return this._healthyStatus
  }

  // Get current states here

  // Grow the tree

}

module.exports = PeachTree
