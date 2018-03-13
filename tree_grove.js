const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
  constructor() {
    this._garden = [];
  }

  gardenInfo() {
    return this._garden;
  }

  addTree(tree) {
    return this._garden.push(tree);
  }

  inputTree(name, age, height, matureAge, healthyStatus) {
    if(name === "MangoTree") {
      var mangoes = new MangoTree(age, height, matureAge, healthyStatus);
      this.addTree(mangoes);
    } else if(name === "AppleTree") {
      var apples = new AppleTree(age, height, matureAge, healthyStatus);
      this.addTree(apples);
    } else if(name === "PearTree") {
      var pears = new PearTree(age, height, matureAge, healthyStatus);
      this.addTree(pears);
    }
  }

  show_ages() {
    var garden = this.gardenInfo();
    for(var i = 0; i < garden.length; i++) {
      console.log(garden[i].age)
    }
  }

  show_trees() {
    var garden = this.gardenInfo();
    for(var i = 0; i < garden.length; i++) {
      console.log(garden[i]);
    }
  }

  mature_trees() {
    var garden = this.gardenInfo();
    for(var i = 0; i < garden.length; i++) {
      if(garden[i].age >= matureAge) {
        console.log(garden[i]);
      }
    }
  }

  dead_trees() {
    var garden = this.gardenInfo();
    for(var i = 0; i < garden.length; i++) {
      if(garden[i].healthyStatus == false) {
        console.log(garden[i]);
      }
    }
  }

  nextYear(year) {
    var garden = this.gardenInfo();
    for(var i = 0; i < year; i++) {
      for(var j = 0; j < garden.length; j++) {
        garden[i].grow();
        garden[i].produceFruit();
      }
    }
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
grove.nextYear()

// show trees age
grove.show_ages()

// show trees
grove.show_trees()

// show trees
grove.mature_trees()

// show trees
grove.dead_trees()
