"use strict"
const {FruitTree, Fruit} = require('./fruit_tree.js');

class MangoTree extends FruitTree {
    // Initialize a new MangoTree
    constructor(treeName, age, plantTree, mature, healthyStatus, maxAge, maxheight) {
        super(treeName, age, plantTree, mature, healthyStatus, 10, 5.1);
    }
}

class Mango extends Fruit {
    // Produce a mango
    constructor() {
        super();
    }
}

module.exports = {
    MangoTree,
    Mango
};