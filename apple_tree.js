"use strict"
const {FruitTree, Fruit} = require('./fruit_tree.js');

class AppleTree extends FruitTree {
    // Initialize a new AppleTree
    constructor(treeName, age, plantTree, mature, healthyStatus, maxAge, maxheight) {
        super(treeName, age, plantTree, mature, healthyStatus, 10, 4.1);
    }
}

class Apple extends Fruit {
    // Produce a apple
    constructor() {
        super();
    }
}

module.exports = {
    AppleTree,
    Apple
};