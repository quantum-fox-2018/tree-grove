const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
  constructor(){
    this.trees = [];
  }

  nextYear(year){
    let plantedTrees = this.trees;

    for(let i = 0; i < year; i++){
      for (let j = 0; j < plantedTrees.length; j++) {
        this.trees[j].grow();
      }
    }
  }

  inputTree(treeName, plantedAge, plantedheight, MatureAge, healthStatus){
    let trees = {};

    if(treeName == 'MangoTree'){
      trees = new MangoTree(treeName, plantedAge, plantedheight, MatureAge, healthStatus);
    }else if (treeName == 'AppleTree') {
      trees = new AppleTree(treeName, plantedAge, plantedheight, MatureAge, healthStatus);
    }else if (treeName == 'PearTree') {
      trees = new PearTree(treeName, plantedAge, plantedheight, MatureAge, healthStatus);
    }
    // console.log(`${treeName}, ${plantedAge}, ${plantedheight}, ${MatureAge}, ${healthStatus} `);
    this.trees.push(trees);
  }

  showAge(){
    let plantedTrees = this.trees;
    let treesAge = []
    for(let i = 0; i < plantedTrees.length; i++){
        treesAge.push(`${plantedTrees[i].treeName}: umur ${plantedTrees[i]._age}`);
    }
    console.log(`Umur Pohon:`, treesAge);
  }

  showTrees(){
    let plantedTrees = this.trees;
    let ownTrees = [];
    for(let i = 0; i < plantedTrees.length; i++){
        ownTrees.push(plantedTrees[i].treeName);
    }
    console.log(`Pohon yang dimiliki: `, ownTrees);
  }

  mature_trees(){
    let plantedTrees = this.trees;
    let matureTrees = [];
    for(let i = 0; i < plantedTrees.length; i++){
      if(plantedTrees[i]._age >= plantedTrees[i].mature && plantedTrees[i].healthStatus == true){
        matureTrees.push(plantedTrees[i].treeName);
      }
    }

    if(matureTrees.length == 0){
      console.log('Belum ada Pohon yang sedang berbuah');
    }else{
      console.log(`Pohon yang sedang berbuah: `, matureTrees);
    }
  }

  dead_trees(){
    let plantedTrees = this.trees;
    let deadTrees = [];
    for(let i = 0; i < plantedTrees.length; i++){
      if(plantedTrees[i].maxAge <= plantedTrees[i]._age){
          this.trees[i].healthStatus = false;
          deadTrees.push(plantedTrees[i].treeName);
      }
    }
    console.log(`Pohon yang Mati: `,deadTrees);
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

grove.inputTree("PearTree", 23, 2, 15,true)
// // next year
grove.nextYear(10);

// show trees age
grove.showAge()

// show trees
grove.showTrees()

// show trees
grove.mature_trees()
//
// show trees
grove.dead_trees()


// console.log(grove);
//Mango bisa
//Apple bisa
//Pear bisa
// let mango = new MangoTree("MangoTree", 3, 1.8, 7,true);
// for (var i = 0; i < 5; i++) {
//     mango.grow();
//     console.log(mango);
// }
