"use strict"

class FruitTree {
  constructor(name,age,height,matureAge,deadAge,healthyStatus) {
    this.name = name
    this._age = age
    this._height = height
    this._fruits = []
    this.matureAge = matureAge
    this._healthyStatus = healthyStatus
    this._harvested = ''
    this.deadAge = deadAge
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
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

  randomGrowth(){
    return Math.random()*2
  }

  grow() {
    this._age++
    this._fruits = []
    if(this.age<=10){
      this._height += this.randomGrowth()
    } else if(this.age == this.deadAge){
      this._healthyStatus = false
    }
  }

  randomFruits(){
    return Math.ceil(Math.random()*20)+5
  }

  produceMangoes() {
    let sum = this.randomFruits()
    if(this._age>=this.matureAge){
      for(let i=0; i<sum; i++){
        let fruit = new Fruit()
        this._fruits.push(fruit.quality)
      }
    }
  }

  harvest() {
    let countGood = 0
    let countBad = 0
    for(let i=0; i<this._fruits.length; i++){
      if(this._fruits[i]=='good'){
        countGood++
      } else {
        countBad++
      }
    }
    this._harvested = `${countGood} good, ${countBad} bad`
  }
}

class Fruit {
  constructor() {
    this.quality = this.fruitQuality()
  }

  fruitQuality(){
    let type = ['good','bad']
    let random = Math.floor(Math.random()*2)
    return type[random]
  }
}

module.exports = {
  FruitTree: FruitTree,
  Fruit: Fruit
}
