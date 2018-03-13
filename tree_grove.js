const FruitTree = require('./fruit_tree.js');
const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PeachTree = require('./peach_tree.js');

const argv=process.argv
const inputYear=argv[2] || 7

class TreeGrove {
  constructor(){
    this._arrTree=[]
  }

  inputTree(name,age,height,mature,healthyStatus){
    if(name==="MangoTree"){
      this._arrTree.push(new MangoTree(name,age,height,mature,healthyStatus))
    }
    else if(name==="AppleTree") {
      this._arrTree.push(new AppleTree(name,age,height,mature,healthyStatus))
    }
    else if(name==="PeachTree"){
      this._arrTree.push(new PeachTree(name,age,height,mature,healthyStatus))
    }
  }

  nextYear(inputYear){
    for (let i = 0; i < inputYear; i++) {
      for (let j = 0; j < this._arrTree.length; j++) {
        this._arrTree[j].grow()
        this._arrTree[j].produceFruits()
        this._arrTree[j].harvest()
      }
    }

  }

  showAge(){
    console.log('Umur '+inputYear+' tahun ke depan :');
    for (let i = 0; i < this._arrTree.length; i++) {
      console.log('Umur '+this._arrTree[i]._name+' : '+this._arrTree[i]._age+' tahun');
    }
    console.log('\n');
  }

  showTrees(){
    console.log('Daftar list pohon :');
    for (var i = 0; i < this._arrTree.length; i++) {
      console.log(this._arrTree[i]._name)
    }
    console.log('\n');
  }

  mature_trees(){
    let counter=0
    for (var i = 0; i < this._arrTree.length; i++) {
      if(this._arrTree[i]._age===this._arrTree[i]._mature){
        console.log('Mature Tree : '+this._arrTree[i]._name);
        counter++
      }
    }
    if(counter===0){
      console.log('Semua pohon belum dapat berbuah');
    }
    console.log('\n');
  }

  dead_trees(){
    let counter=0
    for (var i = 0; i < this._arrTree.length; i++) {
      if(this._arrTree[i]._age>this._arrTree[i]._maxAge){
        console.log('Dead Tree : '+this._arrTree[i]._name);
        counter++
      }
    }
    if(counter===0){
      console.log('Semua pohon masih hidup');
    }
    console.log('\n');
  }

}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7,true);
grove.inputTree("MangoTree", 5, 2.4, 12,true);
grove.inputTree("AppleTree", 4, 1.2, 5,true);
grove.inputTree("PeachTree", 7, 2, 15,true);


// next year

grove.nextYear(inputYear)



//

// show trees age
grove.showAge("MangoTree")
//
// show trees
grove.showTrees()
//
// // show trees
grove.mature_trees()
// looping ndari list tree
//   - mango
//    current age vs matrue age
//   - mango
//   - apple
//   - peachTree
//
// // show trees
grove.dead_trees()
