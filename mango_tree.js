"use strict"

class FruitTree {
  constructor(age, height, matureAge, healthyStatus) {
    this._age = age;
    this._matureAge = matureAge;
    this._height = height;
    this._healthyStatus = healthyStatus;
    this._fruits = [];
    this._harvested = 0;
    this._good = 0;
    this._bad = 0;
  }

  get age() {
    return this._age;
  }

  get matureAge() {
    return this._matureAge;
  }

  get height() {
    return this._height.toFixed(1);
  }

  get fruits() {
    return this._fruits;
  }

  get healthyStatus() {
    return this._healthyStatus;
  }

  get harvested() {
    return this._harvested;
  }

  get good() {
    return this._good;
  }

  get bad() {
    return this._bad;
  }

  // Grow the tree
  grow() {
    //dead at age 20
    this._age++;
    if(this.height < 5){
      this._height += Math.random();
    }
    if(this.age === 20) this._healthyStatus = false;
  }

  // Get some fruits
  harvest() {
    this._good = 0;
    this._bad = 0;
    this._harvested = (this._fruits).length;
    for(let count = 0; count < this.harvested; count++){
      if(this.fruits[count].quality === true){
        this._good++;
      } else {
        this._bad++
      }
    }
    this._fruits = [];
  }

}

class MangoTree extends FruitTree{
  constructor(age, height, matureAge, healthyStatus) {
    super(age, height, matureAge, healthyStatus);
  }

  // Produce some mangoes
  produceMangoes() {
    if(this.age > this.matureAge) {
      let fruit_total = Math.floor(Math.random() * (21 - 1) + 1);
      for(let count = 0; count < fruit_total; count++){
        let mango = new Mango();
        this._fruits.push(mango)
      }
    }
  }

}


class AppleTree extends FruitTree{
  constructor(age, height, matureAge, healthyStatus) {
    super(age, height, matureAge, healthyStatus);
  }

  produceApples() {
    if(this.age > this.matureAge){
      let fruit_total = Math.floor(Math.random() * (21 - 1) + 1);
      for(let count = 0; count < fruit_total; count++){
        let apple = new Apple();
        this.fruits.push(apple)
      }
    }
  }
}

class PearTree extends FruitTree{
  constructor(age, height, matureAge, healthyStatus) {
    super(age, height, matureAge, healthyStatus);
  }

  producePears() {
    if(this.age > this.matureAge){
      let fruit_total = Math.floor(Math.random() * (21 - 1) + 1);
      for(let count = 0; count < fruit_total; count++){
        let pear = new Pear();
        this.fruits.push(pear)
      }
    }
  }
}

class Fruit {
  constructor() {
    let quality_roll = Math.floor(Math.random() * (2 - 0) + 0);
    if(quality_roll === 0){
      this._quality = true;
    } else {
      this._quality = false;
    }
  }

  get quality(){
    return this._quality;
  }
}

class Mango extends Fruit{
  // Produce a mango
  constructor() {
    super();
  }
}

class Apple extends Fruit{
  constructor() {
    super();
  }
}

class Pear extends Fruit{
  constructor() {
    super();
  }
}

exports.MangoTree = function(age, height, matureAge, healthyStatus){ return new MangoTree(age, height, matureAge, healthyStatus);};
exports.AppleTree = function(age, height, matureAge, healthyStatus){ return new AppleTree(age, height, matureAge, healthyStatus);};
exports.PearTree = function(age, height, matureAge, healthyStatus){ return new PearTree(age, height, matureAge, healthyStatus);};
