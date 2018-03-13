"use strict"

class FruitTree {
    constructor(name, age, height, matureAge, healthyStatus){
      this._name = name;
      this._age = age;
      this._height = height;
      this._fruits = [];
      this._healthyStatus = healthyStatus;
      this._matureAge = matureAge;
      this._maxAge = Math.round(Math.random() * 4) + 50;
      this._maxHeight = Math.round(Math.random() * 4) + 30;
    }
  
    set age(age){
      this._age = age;
    }

    set height(height){
      this._height = height;
    }

    set healthyStatus(status){
      this._healthyStatus = status;
    }

    get age() {
      return this._age;
    }
  
    get height() {
      return this._height;
    }

    get name(){
      return this._name;
    }
  
    get fruits() {
      return this._fruits;
    }
  
    get healthyStatus() {
      return this._healthyStatus;
    }
  
    get harvested() {
      return this.harvest()
    }

    get matureAge(){
      return this._matureAge;
    }

    get maxAge(){
      return this._maxAge;
    }

    get maxHeigt(){
      return this._maxHeight;
    }
  
    // Get some fruits
    harvest() {
      let good =0;
      let bad =0;
      for(let indexFruit = 0; indexFruit<this._fruits.length; indexFruit++){
        if(this._fruits[indexFruit].fruitQuality === 0){
          good++;
        }else{
          bad++;
        }
      }
      let result = `${this._fruits.length} (${good} good, ${bad} bad)`;
      this._fruits = [];
      return result;
    }
  
    produceFruits() {
      let totalFruit = Math.round(Math.random()*8);
      for(let loop = 0; loop<totalFruit; loop++){
        if(this.nameOfFruit === 'Mango'){
          let buah = new Mango;
          this._fruits.push(buah);
        }else if(this.nameOfFruit === 'Apple'){
          let buah = new Apple;
          this._fruits.push(buah);
        }
      }
    }
  
    grow() {
      this._age++;
      this._height = this._height + Math.floor(Math.random()*2) + 1;
      
      if(this._age >= this._maxAge || this._height >= this._maxHeight){
        this._healthyStatus = false;
      }
      
    }
   
}

class Fruit {
    constructor() {
      this._fruitQuality = Math.round(Math.random());
    }
  
    get fruitQuality(){
      return this._fruitQuality;
    }
}

class Apple extends Fruit{
    // Produce a apple
    constructor() {
      super();
    }
}

class Pear extends Fruit{
    // Produce a Pear
    constructor() {
        super();
    }
}

class Mango extends Fruit{
  // Produce a mango
  constructor() {
    super();
  }
}

module.exports = FruitTree;



// var testing = new MangoTree;
//   testing.grow();
//   testing.produceFruits();
//   testing.harvest();


/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harverst();
  *   console.log(`[Year ${tree.age} Report] Height = ${tree.height} m | Fruits harvested = ${tree.harvested}`)
  * } while (mangoTree.healthyStatus != false)
  */




