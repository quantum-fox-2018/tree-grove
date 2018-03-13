const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
  constructor() {
    this.arroftrees=[]
  }

  inputTree(name, age, height, matureAge, healthyStatus) {
    var input = ''
    if (name === "MangoTree") {
      input = new MangoTree(name, age, height, matureAge, healthyStatus)
    } else if (name === "AppleTree") {
      input = new AppleTree(name, age, height, matureAge, healthyStatus)
    } else if (name === "PearTree") {
      input = new AppleTree(name, age, height, matureAge, healthyStatus)
    }
    this.arroftrees.push(input)
    // console.log(input);
  }
  nextYear() {
    var umur = this.arroftrees

    for (var i = 0; i < umur.length; i++) {
      umur[i].grow()
    }
  }
  showAge() {
    var umur = this.arroftrees
    var arrAge = []
    for (var i = 0; i < umur.length; i++) {
      arrAge.push(umur[i]._age)
    }
    console.log('Umur pohon : '+arrAge);
  }
  showTrees() {
    var trees = this.arroftrees
    var arrTrees = []
    for (var i = 0; i < trees.length; i++) {
      arrTrees.push(trees[i]._name)
    }
    console.log('Pohon yang ditanam adalah : '+arrTrees);
  }
  mature_trees() {
    var mature = this.arroftrees
    var arrMature = []
    for (var i = 0; i < mature.length; i++) {
      arrMature.push(mature[i]._matureAge)
    }
    console.log('Umur pohon sudah berbuah ketika tahun : '+arrMature);
  }
  dead_trees() {
    var dead = this.arroftrees
    var arrDead = []
    for (var i = 0; i < dead.length; i++) {
      if (dead[i]._healthyStatus === false) {
        arrDead.push(dead[i]._name)
      }
    }
    console.log('Pohon yang sudah mati adalah : '+arrDead);
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
//
// console.log(grove.arroftrees);
// next year
grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()

//
console.log(grove.arroftrees);
// show trees age
grove.showAge()
//
// show trees
grove.showTrees()
//
// show trees
grove.mature_trees()
//
// show trees
grove.dead_trees()


// console.log(grove.this.arroftrees);
