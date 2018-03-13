const FruitTree = require('./fruit_tree.js');


class PearTree extends FruitTree{

  // Initialize a new PearTree
  constructor(name, age, height, mature, healthy) {
    super(name, age, height, mature, healthy)
  }

  get name(){
    return this._name
  }
  get age(){
    return this._age
  }
  get height(){
    return this._height
  }
  get mature(){
    return this._mature
  }
  get healthy(){
    return this._healthy
  }
}

// console.log(new PearTree('PearTree',2,10,20,false));


module.exports = PearTree