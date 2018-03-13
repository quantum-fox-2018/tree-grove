const FruitTree = require('./fruit_tree.js');


class MangoTree extends FruitTree{

  // Initialize a new MangoTree
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

// console.log(new MangoTree('MangoTree',2,10,20,false));


module.exports = MangoTree