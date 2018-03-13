"use strict"

const {MangoTree, Mango} = require('./mango_tree.js');
const {AppleTree, Apple} = require('./apple_tree.js');
const {PearTree, Pear} = require('./pear_tree.js');

class TreeGrove {
    constructor() {
        this._trees = [];
    }

    inputTree(treeName, age, plantTree, mature, healthyStatus) {
        if (treeName === 'MangoTree') {
            let tree = new MangoTree(treeName, age, plantTree, mature, healthyStatus);
            this._trees.push(tree);
        } else if (treeName === 'AppleTree') {
            let tree = new AppleTree(treeName, age, plantTree, mature, healthyStatus);
            this._trees.push(tree);
        } else if (treeName === 'PearTree') {
            let tree = new PearTree(treeName, age, plantTree, mature, healthyStatus);
            this._trees.push(tree);
        }

        console.log(this._trees);
    }

    show_ages() {

    }
}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7,true)
grove.inputTree("MangoTree", 5, 2.4, 12,true)
grove.inputTree("AppleTree", 4, 1.2, 5,true)
grove.inputTree("PearTree", 7, 2, 15,true)

// next year
// grove.nextYear()

// show trees age
// grove.showAge()

// show trees
// grove.showTrees()

// show trees
// grove.mature_trees()

// show trees
// grove.dead_trees()
