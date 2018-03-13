'use strict';

const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
  constructor() {
    this.treeGarden = [];
  }

  inputTree(name, age, height, matureAge, healthyStatus) {
    let nameTree;
    if (name == 'MangoTree') {
      nameTree = new MangoTree(name, age, height, matureAge, healthyStatus);
    } else if (name == 'AppleTree') {
      nameTree = new AppleTree(name, age, height, matureAge, healthyStatus);
    } else if (name == 'PearTree') {
      nameTree = new PearTree(name, age, height, matureAge, healthyStatus);
    }
    nameTree.name = name;
    this.treeGarden.push(nameTree);
  }

  nextYear() {
    for (let i in this.treeGarden) {
      this.treeGarden[i].grow();
    }
  }

  showTrees() {
    this.treesName = [];
    for (let i in this.treeGarden) {
      this.treesName.push(` ${this.treeGarden[i]._name}`);
    }
    console.log(`Name Trees : ${this.treesName} `);
  }

  showAge() {
    this.treesAge = []
    for (let i in this.treeGarden) {
      this.treesAge.push(` ${this.treeGarden[i]._name} : ${this.treeGarden[i]._age} tahun`);
    }
    console.log(`Age Trees : ${this.treesAge}`);
  }

  mature_trees() {
    this.matureTrees = [];
    for (let i in this.treeGarden) {
      if (this.treeGarden[i]._age > this.treeGarden[i]._matureAge) {
        this.matureTrees.push(this.treeGarden[i]._name);
      }
    }
    console.log(`Mature Trees : ${this.matureTrees} `);
  }

  dead_trees() {
    this.deadTrees = [];
    for (let i in this.treeGarden) {
      if (this.treeGarden[i]._age > this.treeGarden[i]._dieAge) {
        this.deadTrees.push(this.treeGarden[i]._name);
      }
    }
    console.log(`Dead Trees : ${this.deadTrees}`);
  }

  showHeight() {
    this.heightTree = [];
    for (let i in this.treeGarden) {
      this.heightTree.push((` ${this.treeGarden[i]._name} : ${this.treeGarden[i]._height.toFixed(1)} m`));
    }
    console.log(`Height Tree : ${this.heightTree}`);
  }

}

var grove = new TreeGrove();
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam
grove.inputTree('MangoTree', 3, 1.8, 17, true);
grove.inputTree('MangoTree', 5, 2.4, 12, true);
grove.inputTree('AppleTree', 4, 1.2, 15, true);
grove.inputTree('PearTree', 7, 2, 10, true);

for (let i = 1; i < 6; i++) {
  console.log('');
  console.log(`-=-=-=-=-=-= YEAR :  ${i} =-=-=-=-=-=-`);
  // next year
  grove.nextYear();

  // show trees
  grove.showTrees();

  // show trees age
  grove.showAge();

  // show height
  grove.showHeight();

  // show trees
  grove.mature_trees();

  // show trees
  grove.dead_trees();

  console.log(`-=-=-=-=-=-= -=-=-= =-=-=-=-=-=-`);

}
