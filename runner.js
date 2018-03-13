const {TreeGrove} = require("./tree_grove.js");
const {AppleTree} = require("./apple_tree.js");
const {MangoTree} = require("./mango_tree.js");

var grove = new TreeGrove();
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam
let appleTree = new AppleTree();
let mangoTree = new MangoTree();

grove.inputTree(appleTree,
  {
    name: "Apple 1",
    age: 2,
    height: 5,
    matureAge: 2,
    healthyStatus: true
  });
grove.inputTree(mangoTree,
  {
    name: "Mango 1",
    age: 1,
    height: 6,
    matureAge: 2,
    healthyStatus: true
  });

for(let i in grove.treegroove) {
  console.log(`Status untuk ${grove.treegroove[i].constructor.name}`);
  do {
    grove.treegroove[i].grow();
    grove.treegroove[i].produceFruits();
    grove.treegroove[i].harvest();
    console.log(`[Year ${grove.treegroove[i].age} Report] Height = ${grove.treegroove[i].height} | Fruits harvested = ${grove.treegroove[i].harvested}`)
  } while(grove.treegroove[i].healthyStatus != false)
  console.log();
}

console.log("Status Keseluruhan:");
grove.showAge();
grove.showTrees();
grove.matureTrees();
grove.deadTrees();
