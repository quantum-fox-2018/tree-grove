const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

let pohonMangga = new MangoTree()
let pohonApel = new AppleTree()
let pohonPear = new PearTree()

class TreeGrove {
    constructor () {

        this._land = []
        this._ageTree = []
    }

    inputTree(name, age, height, produceAge, healthyStatus) {

        if (name === 'MangoTree') {

            this._land.push(new MangoTree(name, age, height, produceAge, healthyStatus))  
        } else if(name === 'PearTree') {

            this._land.push(new PearTree(name, age, height, produceAge, healthyStatus))
        } else if(name === 'AppleTree') {

            this._land.push(new AppleTree(name, age, height, produceAge, healthyStatus))
        }

    }

    showAge() {

        for (let i = 0; i < this._land.length; i++) {
            
            this._ageTree.push(this._land[i]._age)
        }

        // console.log(this._ageTree)
    }

    showTrees() {

        let trees = []

        for (let i = 0; i < this._land.length; i++) {
            
            trees.push(this._land[i]._name)
        }

        return trees
    }

    matureTrees() {

        let matureTree = []

        for (let i = 0; i < this._land.length; i++) {
            
            if (this._land[i]._produceAge >= 4) {

                matureTree.push(this._land[i]._name)
            }
        }

        return matureTree
    }

    deadTrees() {

        let deadTree = []

        for (let i = 0; i < this._land.length; i++) {
            
            if (this._land[i]._healtyStatus === false) {

                deadTree.push(this._land[i]._name)
            }
        }

        return deadTree
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
grove.inputTree("AppleTree", 4, 1.2, 5,false)
grove.inputTree("PearTree", 7, 2, 15,true)

// console.log(grove)
// next year
// grove.nextYear()

// // show trees age
// grove.showAge()
grove.showAge()
// // show trees
// grove.showTrees()
grove.showTrees()
// // show trees
// grove.mature_trees()
grove.matureTrees()
// // show trees
// grove.dead_trees()
grove.deadTrees()