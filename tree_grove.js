const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor(){
        this._trees= [];
    }

    get trees(){
        return this._trees;
    }

    nextYear(){
        for(let index =0; index<this._trees.length; index++){
            if(this._trees[index].age >= this._trees[index].maxAge || this._trees[index].height >= this._trees[index].maxHeight){
                this._trees[index].healthyStatus = false;
            }
            this._trees[index].age++;
            this._trees[index].height+= Math.floor(Math.random()*2) + 1;
        }
    }

    
    inputTree(name, age, height, matureAge, healthyStatus){
        if(name === 'MangoTree'){
            this._trees.push(new MangoTree(name, age, height, matureAge, healthyStatus))
        }else if(name === 'AppleTree'){
            this._trees.push(new AppleTree(name, age, height, matureAge, healthyStatus))    
        }else if(name === 'PearTree'){
            this._trees.push(new PearTree(name, age, height, matureAge, healthyStatus))
        }
    }

    show_ages(){
        console.log(`MANGO TREE'S AGE`);
        for(let indexTrees = 0; indexTrees<this._trees.length; indexTrees++){
            if(this._trees[indexTrees].name === 'MangoTree'){
                console.log(`Mango tree number ${indexTrees+1} age: ${this._trees[indexTrees].age}`)
            }
        }
        
        console.log(`APPLE TREE'S AGE`);
        for(let indexTrees = 0; indexTrees<this._trees.length; indexTrees++){
            if(this._trees[indexTrees].name === 'AppleTree'){
                console.log(`Apple tree number ${indexTrees+1} age: ${this._trees[indexTrees].age}`)
            }
        }

        console.log(`PEAR TREE'S AGE`);
        for(let indexTrees = 0; indexTrees<this._trees.length; indexTrees++){
            if(this._trees[indexTrees].name === 'PearTree'){
                console.log(`Pear tree number ${indexTrees+1} age: ${this._trees[indexTrees].age}`)
            }
        }
    }


    show_trees(){
        for(let indexTrees = 0; indexTrees<this._trees.length; indexTrees++){
            console.log(`Name of tree: ${this._trees[indexTrees].name}, Age: ${this._trees[indexTrees].age}, Heigt: ${this._trees[indexTrees].height} m`);
        }
    }

    mature_trees(){
        console.log('MATURED TREES')
        for(let indexTrees = 0; indexTrees<this._trees.length; indexTrees++){
            if(this._trees[indexTrees].age >= this._trees[indexTrees].matureAge){
                console.log(`Name of tree: ${this._trees[indexTrees].name}, Age: ${this._trees[indexTrees].age}, Heigt: ${this._trees[indexTrees].height}`);
            }
        }
    }

    dead_trees(){
        console.log('DEAD TREES :(')
        for(let indexTrees = 0; indexTrees<this._trees.length; indexTrees++){
            if(this._trees[indexTrees].healthyStatus === false ){
                console.log(`Name of tree: ${this._trees[indexTrees].name}, Age: ${this._trees[indexTrees].age}, Heigt: ${this._trees[indexTrees].height}`);
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
for(let counter = 0; counter<50; counter++){
    grove.nextYear()
}

// show trees age
// grove.show_ages()

// show trees
// grove.show_trees()

// show trees
// grove.mature_trees()

// show trees
grove.dead_trees()

