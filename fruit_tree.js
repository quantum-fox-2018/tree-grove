"use strict"


class FruitTree {
    constructor(treeName,firstAge,firstHeight,matureAge,deadAge,healthyStatus) {
        this._treeName = treeName;
        this._age = firstAge;
        this._firstHeight = firstHeight;
        this._matureAge = matureAge;
        this._deadAge = deadAge;
        this._healthyStatus = healthyStatus;
        this._height = 0;
        this._fruits = [];
        this._healtyStatus = true;
        this._harvested = 0;
    }
  
    get age() {
      return this._age;
    }
  
    get height() {
      return this._height.toFixed(1);
    }
  
    get fruits() {
      return this._fruits;
    }
  
    get healtyStatus() {
      return this._healtyStatus;
    }
  
    get harvested() {
      return this._fruits.length;
    }
  
    grow() {
      this._age += 1;
      this._fruits = [];
  
      // mati diusia 30
      if(this._age >= this._maxAge){
        this._healtyStatus = false;
      }
  
      // tinggi bertambah setiap tahun
      this._height += (Math.random()*1);
    }
  
    produceFruit(fruitNames) {
      if(this._age >= this._firstFruit){
          let produceRandom = Math.floor(Math.random()*10+5);
          for(let i=0; i<produceRandom; i++){
              let fruitz;
              if(fruitNames == 'mango'){
                  fruitz = new Mango();
              } else if(fruitNames == 'apple') {
                  fruitz = new Apple();
              } else if(fruitNames == 'pear'){
                  fruitz = new Pear();
              }
              this._fruits.push(fruitz)
          }
      }
    }
  
    // Get some fruits
    harvest() {
      let countGood = 0;
      let countBad = 0;
      for(let i=0; i<this._fruits.length; i++){
        if(this._fruits[i].quality == 'good'){
          countGood++;
        } else {
          countBad++;
        }
        this._harvested++;
      }
      return `(${countGood} good, ${countBad} bad)`;
    }
  }

  module.exports = FruitTree;