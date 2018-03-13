const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');
const FruitTree = require('./fruit_tree.js')

class TreeGrove {
    constructor(){
        this._tree = [];
    }
    inputTree(treeName,firstAge,firstHeight,matureAge,deadAge,healthyStatus){
        if(treeName == 'MangoTree'){
            let mangoTree = new MangoTree(treeName,firstAge,firstHeight,matureAge,deadAge,healthyStatus);
            this._tree.push(mangoTree)
        } else if (treeName == 'AppleTree'){
            let appleTree = new AppleTree(treeName,firstAge,firstHeight,matureAge,deadAge,healthyStatus);
            this._tree.push(appleTree)
        } else if (treeName == 'PearTree'){
            let pearTree = new PearTree(treeName,firstAge,firstHeight,matureAge,deadAge,healthyStatus);
            this._tree.push(pearTree)
        }
    }

    nextYear(year){
        for(let i=0; i<this._tree.length; i++){
            this._tree[i]._age += year;
            this._tree[i]._firstHeight += 10;
        }
    }

    showAge(){
        console.log('Umur Pohon :');
        let no = 1;
        for(let i=0; i<this._tree.length; i++){
            console.log(`${no} ${this._tree[i]._treeName} (${this._tree[i]._age} thn)`)
            no++;
        }
    }

    showTrees(){
        console.log('Nama-nama pohon dalam Taman :');
        let name = [];
        for(let i=0; i<this._tree.length; i++){
            if(name.indexOf(this._tree[i]._treeName)== -1){
                name.push(this._tree[i]._treeName)
            }
        }
        let no = 1;
        for(let i=0; i<name.length; i++){
            console.log(`${no} ${name[i]}`)
            no++;
        }
    }

    mature_trees(){
        console.log('Mature Age :')
        let no=1;
        for(let i=0; i<this._tree.length; i++){
            if(this._tree[i]._age > this._tree[i]._matureAge){
                console.log(`${no} ${this._tree[i]._treeName} (${this._tree[i]._age} thn)`)
                no++;
            }
        }
    }

    dead_trees(){
        console.log('Pohon yang mati :')
        let no =1;
        for(let i=0; i<this._tree.length; i++){
            if(this._tree[i]._age > this._tree[i]._deadAge){
                console.log(`${no} ${this._tree[i]._treeName}`)
                no++;
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
grove.inputTree("MangoTree", 5, 2.4, 12, 17, true)
grove.inputTree("AppleTree", 4, 1.2, 5, 20, true)
grove.inputTree("PearTree", 7, 2, 15, 20, true)


// next year
grove.nextYear(2)

// // show trees age
grove.showAge()

// // show trees
console.log('------------------------------')
grove.showTrees()

// // show trees
console.log('------------------------------')
grove.mature_trees()

// // show trees
console.log('------------------------------')
grove.dead_trees()

// console.log(grove._tree)

