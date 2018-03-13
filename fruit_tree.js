function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

class FruitTree {
  constructor(age, height, matureAge, isHealthy, maxFruits, maxAge, maxHeight) {
    this._age = age;
    this._matureAge = matureAge;
    this._maxAge = maxAge
    this._height = height;
    this._maxHeight = maxHeight
    this._fruits = [];
    this._maxFruits = maxFruits
    this._harvested = [];
    this._isHealthy = isHealthy;
  }

  set maxHeight(value) {
    this._maxHeight = value;
  }
  set maxFruits(value) {
    this._maxFruits = value;
  }
  set maxAge(value) {
    this._maxAge = value;
  }

  set height(height){
    this._height = height
  }

  set matureAge(value){
    this._matureAge = value
  }

  set age(age){
    this._age = age
  }

  set healthyStatus(status){
    this._isHealthy = status
  }

  get age() {
   return this._age;
  }

  get maxAge(){
    return this._maxAge
  }

 get height() {
   return this._height;
 }

 get fruits() {
   return this._fruits;
 }

 get matureAge() {
   return this._matureAge;
 }

 get healthyStatus() {
   return this._isHealthy;
 }

 get harvested() {
   return this._harvested;
 }

 grow() {
  if (this.age < this.matureAge) {
     this._height += getRandomInt(1, 6);
  }
  if (this.age < this.maxAge) {
    this.age = this.age + 1
  }
  if(this._age >= this._maxAge || this._height >= this._maxHeight) {
    this._isHealthy = false;
    }
  }

  produceFruits() {
    if (this.age >= this.matureAge) {
      let maxFruits = getRandomInt(1, this._maxFruits+1);
      for(let i = 0; i < maxFruits; i++) {
        let fruit = new Fruit();
        this._fruits.push(fruit);
      }
    }
  }

  harvest() {
    let badFruits = []
    let goodFruits = []
    for (var i = 0; i < this.fruits.length; i++) {
      if (this.fruits[i].quality === 0) {
        badFruits.push(this.fruits[i])
      }
      else{
        goodFruits.push(this.fruits[i])
      }
    }
    this._harvested = `Harvested ${this.fruits.length}, (good : ${goodFruits.length}, bad : ${badFruits.length})`;
    this._fruits = [];
  }

}

class Fruit {
  // Produce a fruit
  constructor() {
    this._quality = getRandomInt(0, 2);
  }

  get quality(){
    return this._quality
  }

  set quality(quality){
    this._quality = quality
  }
}

module.exports = {FruitTree, Fruit}
