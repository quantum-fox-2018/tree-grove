const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
  constructor() {
    this._trees = [];
  }

  inputTree(name, age, height, matureAge, healthyStatus) {
    if (name === `MangoTree`) {
      let tree = new MangoTree(name, age, height, matureAge, healthyStatus);
      this._trees.push(tree);
    } else if (name === `AppleTree`) {
      let tree = new AppleTree(name, age, height, matureAge, healthyStatus);
      this._trees.push(tree);
    } else if (name === `PearTree`) {
      let tree = new PearTree(name, age, height, matureAge, healthyStatus);
      this._trees.push(tree);
    }

  }

  nextYear() {
    for (let i in this._trees) {
      this._trees[i].age = this._trees[i].age + 9;
      if (this._trees[i].age >= this._trees[i].maxAge) {
        this._trees[i].healthyStatus = false;
      }
    }
  }

  showAge() {
    let treesAge = [];

    for (let i in this._trees) {
      let age = `${this._trees[i].age} years old`
      treesAge.push(this._trees[i].name, age);
    }

    console.log(`\nShow Trees Age: `);
    console.log(treesAge);
  }

  showTrees() {
    let trees = [];

    for (let i in this._trees) {
      trees.push(this._trees[i].name);
    }

    console.log(`\nShow ${this._trees.length} Trees: `);
    console.log(trees);
  }

  mature_trees() {
    let matureTrees = [];

    for (let i in this._trees) {
      if (this._trees[i].age >= this._trees[i].matureAge && this._trees[i].age < this._trees[i].maxAge) {
        let age = `${this._trees[i].age} years old`
        matureTrees.push([this._trees[i].name, age]);
      }
    }

    console.log(`\nShow ${matureTrees.length} Mature Trees: `);
    console.log(matureTrees);
  }

  dead_trees() {
    let deadTrees = [];

    for (let i in this._trees) {
      if (this._trees[i].healthyStatus === false) {
        let age = `${this._trees[i].age} years old`
        deadTrees.push([this._trees[i].name, age]);
      }
    }

    console.log(`\nShow ${deadTrees.length} Dead Trees: `);
    console.log(deadTrees);
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
