const MangoTree = require('./mango_tree.js');
// console.log(MangoTree);
const AppleTree = require('./apple_tree.js');
// console.log(AppleTree);
const PearTree = require('./pear_tree.js');
// console.log(PearTree);

class TreeGrove {
    constructor() {
        this._garden = [];
    }

    inputTree(name,age,height,mature_age,healthyStatus) {
        let newObjTree = {
            name: name,
            age: age,
            height: height,
            mature_age: mature_age,
            status: healthyStatus
        }

        let garden = this._garden;
        if (newObjTree.name == 'MangoTree') {
            let mangoTree = new MangoTree(newObjTree);
            garden.push(mangoTree);
        } else if (newObjTree.name == 'AppleTree') {
            let appleTree = new AppleTree(newObjTree);
            garden.push(appleTree);
        } else {
            let pearTree = new PearTree(newObjTree);
            garden.push(pearTree);
        }
    }

    showTrees () {
        console.log(this._garden);
    }

    showAges () {
        let garden = this._garden;
        let arrTrees = [];
        for (let i = 0; i < garden.length; i++) {
            let tree = [];
            tree.push(garden[i]._name);
            tree.push(`Umur: ${garden[i]._age} tahun`);
            arrTrees.push(tree);
        }
        console.log(arrTrees);
    }

    showMatureTrees() {
        let garden = this._garden;
        for (let i = 0; i < garden.length; i++) {
            if (garden[i]._mature_age < garden[i]._age) {
                console.log(garden[i]);
            }
        }
    }

    showDeadTrees() {
        let garden = this._garden;
        for (let i = 0; i < garden.length; i++) {
            if (garden[i]._status == false) {
                console.log(garden[i]);
            }
        }
    }

    nextYear () {
        let garden = this._garden;
        for (let i = 0; i < garden.length; i++) {
            garden[i]._age++;
        }

        console.log(garden);
    }

}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 10, 1.8, 7,true)
grove.inputTree("MangoTree", 5, 2.4, 12,true)
grove.inputTree("AppleTree", 7, 1.2, 5,true)
grove.inputTree("PearTree", 7, 2, 15,false)

// next year
grove.nextYear()

// show trees age OK
// grove.showAges()

// show trees OK
// grove.showTrees()

// show trees OK
// grove.showMatureTrees()

// show trees OK
// grove.showDeadTrees()
