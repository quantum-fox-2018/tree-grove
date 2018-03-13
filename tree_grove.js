const Tree = require('./mango_tree.js');
//const AppleTree = require('./apple_tree.js');
//const PearTree = require('./pear_tree.js');

class TreeGrove {
  constructor(){
    this.tree = [];
  }

  inputTree(name, age, height, matureAge, healthyStatus){
    switch(name){
      case 'MangoTree':
        this.tree.push([name,Tree.MangoTree(age, height, matureAge, healthyStatus)]);
        break;
      case 'AppleTree':
        this.tree.push([name,Tree.AppleTree(age, height, matureAge, healthyStatus)]);
        break;
      case 'PearTree':
        this.tree.push([name,Tree.PearTree(age, height, matureAge, healthyStatus)]);
        break;
    }
  }

  nextYear(){
    for(let index in this.tree){
      let death_roll = Math.floor(Math.random() * (10 - 0) + 0);
      this.tree[index][1]._age++;
      if(this.tree[index][1].age < this.tree[index][1].matureAge){
        this.tree[index][1]._height += Math.random();
        this.tree[index][1]._height.toFixed(1);
      }
      if(death_roll === 9){
        this.tree[index][1]._healthyStatus = false;
      }
    }
  }

  showAge(){
    for(let index in this.tree)console.log(this.tree[index][0] +' in pot ' + (index) + ' is '+this.tree[index][1].age + ' Years old');
    console.log('\n');
  }

  showTrees(){
    for(let index in this.tree)console.log('the tree in pot ' + (index) + ' is a '+ this.tree[index][0]);
    console.log('\n');
  }

  mature_trees(){
    for(let index in this.tree){
      if(this.tree[index][1].age >= this.tree[index][1].matureAge) console.log(this.tree[index][0] + ' in pot ' + (index) + ' is already matured');
    }
    console.log('\n');
  }

  dead_trees(){
    for(let index in this.tree){
      if(this.tree[index][1].healthyStatus === false) console.log(this.tree[index][0] + ' in pot ' + (index) + ' is unfortunately dead');
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
grove.inputTree("MangoTree", 3, 1.8, 7,true)
grove.inputTree("MangoTree", 5, 2.4, 12,true)
grove.inputTree("AppleTree", 4, 1.2, 5,true)
grove.inputTree("PearTree", 7, 2, 15,true)

for(let year = 0; year < 10; year++){
  console.log('++++++++ Year ' + (year+1) + ' report ++++++++++\n');

  // next year
  grove.nextYear()

  // show trees
  grove.showTrees()

  // show trees age
  grove.showAge()

  // show trees
  grove.mature_trees()

  // show trees
  grove.dead_trees()
}
