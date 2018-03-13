const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
  constructor(){
    this._trees = []
  }

  get trees(){
    return this._trees
  }

  inputTree(name,age,height,matureAge,healthyStatus){
    if(name=='MangoTree'){
      var mango = new MangoTree(name,age,height,matureAge,healthyStatus)
      this._trees.push(mango)
    } else if(name=='AppleTree'){
      var apple = new AppleTree(name,age,height,matureAge,healthyStatus)
      this._trees.push(apple)
    } else if(name=='PearTree'){
      var pear = new PearTree(name,age,height,matureAge,healthyStatus)
      this._trees.push(pear)
    }
  }

  nextYear(num){
    for(let i=0; i<num; i++){
      for(let j=0; j<this._trees.length; j++){
        this._trees[j]._age++
        if(this._trees[j].name == 'MangoTree'){
          this._trees[j]._heigth += Math.random()*2
        } else {
          this._trees[j]._heigth += Math.random()*1
        }
      }
    }
  }

  showAge(){
    console.log(`Umur setiap pohon:`)
    for(let i=0; i<this._trees.length; i++){
      console.log(`${this._trees[i].name}, ${this._trees[i].age} tahun`)
    }
  }

  showTrees(){
    console.log(`Pohon yang ada di taman:`)
    for(let i=0; i<this._trees.length; i++){
      console.log(this._trees[i].name)
    }
  }

  mature_trees(){
    console.log(`Pohon yang sudah dewasa`)
    for(let i=0; i<this._trees.length; i++){
      if(this._trees[i].age > this._trees[i].matureAge && this._trees[i].age < this._trees[i].deadAge){
        console.log(this._trees[i].name)
      }
    }
  }

  dead_trees(){
    console.log(`Pohon yang sudah mati`)
    for(let i=0; i<this._trees.length; i++){
      if(this._trees[i].age >= this._trees[i].deadAge){
        console.log(this._trees[i].name)
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
grove.inputTree("MangoTree", 3, 1.8, 7, 15, true)
grove.inputTree("MangoTree", 5, 2.4, 12, 15, true)
grove.inputTree("AppleTree", 4, 1.2, 5, 10, true)
grove.inputTree("PearTree", 7, 2, 15, 18, true)

// // next year
grove.nextYear(10)

// show trees age
grove.showAge()
console.log('')

// show trees
grove.showTrees()
console.log('')

// show trees
grove.mature_trees()
console.log('')

// show trees
grove.dead_trees()
console.log('')
