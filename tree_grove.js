const {AppleTree, Apple} = require("./apple_tree.js");
const {MangoTree, Mango} = require("./mango_tree.js");
//const PearTree = require('./pear_tree.js');

class TreeGrove {
  constructor() {
    this._treegrove = [];
  }

  get treegroove() {
    return this._treegrove;
  }

  inputTree(objTree, obj) {
    //memasukan data pohon, menerima jenis pohon apapun dan umur pohon berapapun
    objTree.name = obj.name;
    objTree.age = obj.age;
    objTree.height = obj.height;
    objTree.matureAge = obj.matureAge;
    objTree.healthyStatus = obj.healthyStatus;
    this._treegrove.push(objTree);
  }

  // nextYear() {
  //   for(let i in this.treegroove) {
  //     this._treegrove[i]._age++;
  //   }
  // }

  showAge() {
    //memberi tahu umur setiap pohon yang ada di taman
    console.log("Age of Tree Status");
    for(let i in this.treegroove) {
      console.log(`Pohon ${Number(i)}: ${this.treegroove[i].constructor.name} bernama ${this.treegroove[i].name} berumur ${this.treegroove[i].age}`);
    }
  }

  showTrees() {
    //return semua nama pohon yang ada di taman
    console.log("Tree Status");
    for(let i in this.treegroove) {
      console.log(`Pohon ${Number(i)}: ${this.treegroove[i].constructor.name} bernama ${this.treegroove[i].name}`);
    }
  }

  matureTrees() {
    ///return semua nama pohon yang sedang berbuah
    console.log("Mature Tree Status");
    for(let i in this.treegroove) {
      if(this.treegroove[i].age >= this.treegroove[i].matureAge) {
          console.log(`Pohon ${Number(i)}: ${this.treegroove[i].constructor.name} bernama ${this.treegroove[i].name} sedang berbuah`);
      }
    }
  }

  deadTrees() {
    // return nama pohon yang MATI di taman tersebut
    console.log("Dead Tree Status");
    for(let i in this.treegroove) {
      if(!this.treegroove[i].healthyStatus) {
        console.log(`Pohon ${Number(i)}: ${this.treegroove[i].constructor.name} bernama ${this.treegroove[i].name} sudah mati`);
      }
    }
  }
}

module.exports = {
  TreeGrove
}
