const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
  constructor() {
      this.trees = []
  }

  inputTree(treeName, firstAge, firstHeight, matureAge, healtyStatus){
    var inputPohon = ''
      if(treeName == 'MangoTree'){
          inputPohon = new MangoTree(treeName, firstAge, firstHeight, matureAge, healtyStatus)
      }else if(treeName == 'AppleTree'){
          inputPohon = new AppleTree(treeName, firstAge, firstHeight, matureAge, healtyStatus)
      }else if(treeName == 'PearTree'){
          inputPohon = new PearTree(treeName, firstAge, firstHeight, matureAge, healtyStatus)
      }
    this.trees.push(inputPohon)
  }

  show_ages(){
    let len = this.trees.length
    let umur = []
    for(let i = 0; i < len; i++){
        umur.push(this.trees[i].age)
    }
    return umur
  }

  show_trees(){
    let len = this.trees.length
    let  trees= []
    for(let i = 0; i < len; i++){
        trees.push(this.trees[i].treeName)
    }
    return trees
  }

  next_year(){
    let len = this.trees.length
    for(let i = 0; i < len; i++){
      this.trees[i].grow()
    }
  }

  mature_trees(){
    let mature = []
    let len = this.trees.length

    for(let i = 0; i < len; i++){
      if(this.trees[i].age >= this.trees[i].matureAge && this.trees[i].age < this.trees[i].maxAge){
        mature.push(this.trees[i].treeName)
      }
    }
    return mature
  }

  dead_trees(){
    let dead = []
    let len = this.trees.length
    for(let i = 0; i < len; i++){
      if(this.trees[i].age === this.trees[i].maxAge){
        dead.push(this.trees[i].treeName)
      }
    }
    return dead
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
console.log(grove)
for(let i =1 ; i<10; i++){
  grove.next_year()
}
console.log('umur pohon = ',grove.show_ages())
console.log('daftar pohon = ',grove.show_trees())
console.log('daftar pohon berbuah = ',grove.mature_trees())
console.log('daftar pohon mati = ',grove.dead_trees())
