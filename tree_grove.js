const MangoTreeImport = require('./mango_tree.js');
const AppleTreeImport = require('./apple_tree.js');
const PearTreeImport = require('./pear_tree.js');

const MangoTree = MangoTreeImport.MangoTree;
const AppleTree = AppleTreeImport.AppleTree;
const PearTree = PearTreeImport.PearTree

class TreeGrove {
  constructor(){
    this.farm = []
  }

  inputTree(name,initialAge,matureAge,height,healthyStatus){
    this.growGroove = []
    var tree;
    if(name == "MangoTree"){
      tree = new MangoTree(initialAge,height,matureAge,healthyStatus);
    }
    else if (name == "AppleTree") {
      tree = new AppleTree(initialAge,height,matureAge,healthyStatus);
    }
    else if(name =="PearTree"){
      tree = new PearTree(initialAge,height,matureAge,healthyStatus);
    }
    tree.name = name;
    this.farm.push(tree)
  }
  nextYear(){
    for(let i=0;i<this.farm.length;i++){
      this.farm[i].grow();
    }

  }
  showTrees(){
    this.treesName = []

    for(let i=0;i<this.farm.length;i++){
        this.treesName.push(this.farm[i].name);
    }
    console.log('---Name Trees---',this.treesName);
  }
  showAge(){
    this.treesAge = []

    for(let i=0;i<this.farm.length;i++){
        this.treesAge.push(this.farm[i]._age);
    }
    console.log('---Age Trees---',this.treesAge)
  }
  mature_trees(){
    this.matureTrees = [];
    for(let i=0;i<this.farm.length;i++){
      if(this.farm[i]._age<this.farm[i].matureAge){
        this.matureTrees.push(this.farm[i].name);
      }
    }
    console.log('---Mature Trees---',this.matureTrees);
  }
  dead_trees(){
    this.deadTrees = [];
    for(let i=0;i<this.farm.length;i++){
      if(this.farm[i]._age>this.farm[i].matureAge){
        this.deadTrees.push(this.farm[i].name);
      }
    }
    console.log('---Dead Trees---',this.deadTrees);
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



for(let i=1;i<6;i++){
  console.log('------------------ HASIL TAHUN : ' + i + ' -------------------' +'\n');
  grove.nextYear();
  for(let j=0;j<grove.farm.length;j++){
    console.log(`${grove.farm[j].name} ${grove.farm[j]._age} tahun Height: ${grove.farm[j]._height.toFixed(1)}`);
  }
  console.log('\n');
}

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
