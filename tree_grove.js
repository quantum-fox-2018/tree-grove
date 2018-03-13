const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor(){
        this._treeList = []
    }

    inputTree(name, age, height, mature, healthy){
        if(name == 'MangoTree'){
            this._treeList.push(new MangoTree(name, age, height, mature, healthy))
        } else if(name == 'AppleTree'){
            this._treeList.push(new AppleTree(name, age, height, mature, healthy))
        } else if(name == 'PearTree'){
            this._treeList.push(new PearTree(name, age, height, mature, healthy))
        }
    }

    nextYear(){
        for(let i = 0; i < this._treeList.length; i++) {
            this._treeList[i].grow()
            this._treeList[i].produceFruit()
        }
    }

    showAge(){
        console.log('=======UMUR SETIAP POHON=======');
        
        for(let i=0; i<this._treeList.length; i++){
            console.log(this._treeList[i].name,"age :", this._treeList[i].age,'Years');
        }
    }

    showTrees(){
        console.log('=======NAMA POHON YANG ADA DI TAMAN=======');

        for(let i=0; i<this._treeList.length; i++){
            console.log('This is :', this._treeList[i].name);
        }
    }

    mature_trees(){
        console.log('=======POHON YANG SEDANG BERBUAH=======');
        for(let i = 0; i<this._treeList.length; i++) {
            let no = i+1
            if (this._treeList[i]._fruits.length > 0 && this._treeList[i]._healthStatus == true) {
              console.log(no+'.',this._treeList[i].name, 'being fruitfull');
            }
        }
    }

    dead_trees(){
        console.log('=======POHON YANG TELAH MATI=======');
        for (let i = 0; i < this._treeList.length; i++) {
            if (this._treeList[i]._healthStatus == false) {
                console.log(this._treeList[i].name,'is Dead Yesterday');
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
grove.inputTree("MangoTree", 5, 2.4, 12,false)
grove.inputTree("AppleTree", 4, 1.2, 5,true)
grove.inputTree("PearTree", 7, 2, 15,true)

// next year
grove.nextYear()

// show trees age
grove.showAge()

// // show trees
grove.showTrees()

// // show trees
grove.mature_trees()

// // show trees
grove.dead_trees()


// console.log(new PearTree('PearTree',2,10,20,false));
// console.log(grove._treeList[1]._fruits);
// console.log(grove._treeList[0]._healthStatus);
