"use strict"

const {
    MangoTree,
    Mango
} = require('./mango_tree.js');
const {
    AppleTree,
    Apple
} = require('./apple_tree.js');
const {
    PearTree,
    Pear
} = require('./pear_tree.js');

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
    }

    nextYear() {
        for (let i in this._trees) {
            this._trees[i].grow();
        }
    }

    showAge() {
        let treeAge = [];

        for (let i in this._trees) {
            treeAge.push(`${this._trees[i]._treeName}: ${this._trees[i].age} years old`)
        }

        console.log('===== Age of trees =====');
        console.log(treeAge.join('\n'));
    }

    showTrees() {
        let trees = [];

        for (let i in this._trees) {
            trees.push(this._trees[i]._treeName);
        }

        console.log('')
        console.log('===== Name of trees =====');
        console.log(trees.join('\n'));
    }

    mature_trees() {
        let matureTrees = [];

        for (let i in this._trees) {
            if (this._trees[i].age >= this._trees[i].mature) {
                matureTrees.push(this._trees[i]._treeName);
            }
        }

        console.log('')
        console.log('===== Mature trees =====');
        console.log(matureTrees.join('\n'))
    }

    dead_trees() {
        let deadTrees = [];

        for (let i in this._trees) {
            if (this._trees[i].age > this._trees[i].maxAge) {
                deadTrees.push(this._trees[i]._treeName);
            }
        }

        console.log('')
        console.log('===== Dead trees =====');
        console.log(deadTrees.join('\n'))
    }

}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("MangoTree", 5, 2.4, 12, true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)

for (let i = 1; i <= 8; i++) {
    console.log(`\n================================ ${i} Year ================================`);
    // next year
    grove.nextYear()
    // show trees age
    grove.showAge()

    // show trees
    grove.showTrees()

    // show trees
    grove.mature_trees()

    // show trees
    grove.dead_trees()
}