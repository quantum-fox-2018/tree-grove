"use strict"

const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove{

  constructor(){
    this._farm = []
  }

  nextYear(number){
    let farm = this.getFarm()
    for (var y = 0; y < number; y++) {
      for (var i = 0; i < farm.length; i++) {
        farm[i].grow()
        farm[i].produceFruits()
        farm[i].harvest()
      }
    }
  }

  addFarm(tree){
    this._farm.push(tree)
  }

  getFarm(){
    return this._farm
  }

  inputTree(namaPohon, umur, tinggi, matureAge, isHealthy){
    if (namaPohon === "MangoTree") {
      var mangoTree = new MangoTree(umur, tinggi, matureAge, isHealthy)
      this.addFarm(mangoTree)
    }else if(namaPohon === "AppleTree"){
      var appleTree = new AppleTree(umur, tinggi, matureAge, isHealthy)
      this.addFarm(appleTree)
    }else if(namaPohon === "PearTree"){
      var pearTree = new PearTree(umur, tinggi, matureAge, isHealthy)
      this.addFarm(pearTree)
    }else {
      return "nama pohon tidak valid"
    }
  }

  show_ages(){
    let farm = this.getFarm()
    for (var i = 0; i < farm.length; i++) {
      console.log("umur pohon sekarang adalah ", farm[i].age);
    }
  }

  show_trees(){
    let farm = this.getFarm()
    for (var i = 0; i < farm.length; i++) {
      console.log(farm[i]);
    }
  }

  mature_trees(){
    let farm = this.getFarm()
    for (var i = 0; i < farm.length; i++) {
      if (farm[i].age >= farm[i].matureAge) {
        console.log(farm[i]);
      }
    }
  }

  dead_trees(){
    let farm = this.getFarm()
    for (var i = 0; i < farm.length; i++) {
      if (farm[i].healthyStatus === false) {
        console.log(farm[i]);
      }
    }
  }
}

var grove = new TreeGrove()
grove.inputTree("MangoTree",8,20,9,true)
grove.inputTree("MangoTree",8,21,10,true)
grove.inputTree("AppleTree",9,22,11,true)
grove.inputTree("PearTree",10,23,12,true)

  grove.nextYear(3)

  console.log("showing ages");
  grove.show_ages()
  console.log(" ");

  console.log("showing trees");
  grove.show_trees()
  console.log(" ");

  console.log("showing mature_trees");
  grove.mature_trees()
  console.log(" ");

  console.log("showing dead_trees");
  grove.dead_trees()
  console.log(" ");
