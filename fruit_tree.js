"use strict"
const Fruit = require('./fruit.js')

// release 0
class FruitTree {
  constructor(name,age,height,mature,healthyStatus){
    this._name=name
    this._age=age
    this._height=height
    this._mature=mature
    this._healthyStatus=healthyStatus
    this._arrFruit=[]
  }

  grow() {

    for (var i = 0; i < this._maxAge; i++) {
      var randHeight=Math.random();
      if(this._age<this._maxHeight){
        this._height=this._height+randHeight
      }
      this._age++
      if(this._age>=this._maxAge){
        this._healthyStatus=false
      }
      return this._age
    }

  }

  // Produce some mangoes
  produceFruits() {
    this._arrFruit=[]
    let randProduce=Math.random()*20
    for (var i = 0; i < randProduce; i++) {
      this._arrFruit.push(new Fruit())
    }
  }

  // Get some fruits
  harvest() {
    let countGood=0
    let countBad=0
    for (let i = 0; i < this._arrFruit.length; i++) {
      if(this._arrFruit[i]._quality===0){
        countBad++
      }
      else{
        countGood++
      }
    }

    return this._arrFruit.length+' (Good : '+countGood+', Bad :'+countBad+')'
  }
}

module.exports = FruitTree
