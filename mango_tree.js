const FruitTree = require('./fruit_tree.js')
const Mango = require('./mango.js')

class MangoTree extends FruitTree{

  // Initialize a new MangoTree
  constructor(name,age,height,mature,healthyStatus) {
    super(name,age,height,mature,healthyStatus)
    this._maxAge=15
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


module.exports = MangoTree

  // * driver code untuk release 0




// Release 2
