"use strict";

const Fruit = require('./fruit');

class FruitTree {
  constructor() {
    this._age = 0;
    this._height = 0;
    this._matureAge = 0;
    this._maxProduceAge = 0;
    this._dieAge = 0;
    this._maxGrowUp = 0;
    this._healthyStatus = true;
    this._fruits = [];
    this._harvested = '';
    this._good = 0;
    this._bad = 0;
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

  grow() {
    this._age++;
    if (this._age < this._maxGrowUp) {
      this._height += Math.floor(Math.random() * 10) / 10;
    }
    if (this._age > this._dieAge) {
      this._healthyStatus = false;
    }
  }

  produceFruits() {

    if (this._age >= this._matureAge && this._age <= this._maxProduceAge) {
      let fruitsSum = Math.floor(Math.random() * 10) + 1;
      for (let i = fruitsSum; i > 0; i--) {
        let fruit = new Fruit();
        let qualityRandom = Math.random();
        if (qualityRandom >= 0.5 && fruit.quality == 'good') {
          this._fruits.push(fruit);
        } else {
          this._fruits.push(fruit);
        }
      }
    }
  }

  harvest() {
    this._bad = 0;
    this._good = 0;
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i].quality === 'good') {
        this._good++;
      } else {
        this._bad++;
      }
    }
    this._harvested = `${this._fruits.length} (${this._good} good, ${this._bad} bad)`;
  }
}


module.exports = FruitTree;
