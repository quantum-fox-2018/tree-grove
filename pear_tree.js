"use strict"
const {FruitTree, Fruit} = require('./fruit_tree.js');

class PearTree extends FruitTree {
    // Initialize a new PearTree
    constructor(treeName, age, plantTree, mature, healthyStatus, maxAge, maxheight) {
        super(treeName, age, plantTree, mature, healthyStatus, 10, 4.4);
    }
}

class Pear extends Fruit {
    // Produce a Pear
    constructor() {
        super();
    }
}

module.exports = {
    PearTree,
    Pear
};