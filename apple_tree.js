const FruitTree = require('./fruit_tree.js')
const Apple = require('./apple.js')

class AppleTree extends FruitTree{
  constructor(name,age,height,mature,healthyStatus) {
    super(name,age,height,mature,healthyStatus)
    this._maxAge=10
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


}


module.exports = AppleTree
