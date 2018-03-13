"use strict"
const TreeGrove = require('./tree_grove.js')
const FruitTree = require('./fruit_tree.js')
const Fruit = require('./fruit.js')


class AppleTree extends FruitTree{
    constructor(treeName,firstAge,firstHeight,matureAge,deadAge,healthyStatus){
        super(treeName,firstAge,firstHeight,matureAge,deadAge,healthyStatus)
    }
}




module.exports = AppleTree;