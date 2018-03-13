"use strict"

// release 0
class FruitTree {
  // Initialize a new MangoTree
  constructor(newObjTree) {
    this._name = newObjTree.name
    this._age = newObjTree.age;
    this._height = newObjTree.height;
    // this._max_fruit = newObjTree.max_fruit;
    // this._current_fruit = newObjTree.current_fruit;
    // this._picked_fruit = newObjTree.picked_fruit;
    this._status = newObjTree.status;
    this._mature_age = newObjTree.mature_age;
    // this._dying_age = newObjTree.dying_age;
    // this._good = 0;
    // this._bad = 0;
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._current_fruit;
  }

  get healtyStatus() {
    return this._status;
  }

  get harvested() {
    return this._picked_fruit;
  }

  get goodFruit() {
    return this._good;
  }

  get badFruit() {
    return this._bad;
  }

  // Get current states here

  // Grow the tree
  grow() {
    let mature_age = this._mature_age;
    let dying_age = this._dying_age;

    if (this._age < dying_age && this.age <= mature_age) {
      this._age += 1;
      this._height += 1; //dalam meter
    } else if (this._age < dying_age && this._age > mature_age) {
      this._age += 1;
    } else {
      this._status = false;
    }
  }

  // Produce some mangoes
  produceFruites() {
    let mature_age = this._mature_age;
    let dying_age = this._dying_age;

    if (this._age < dying_age && this.age <= mature_age) {
      this._current_fruit += 0;
    } else if (this._age < dying_age && this._age > mature_age) {
      this._current_fruit = Math.floor(Math.random()*51);
    } else {
      this._status = false;
    }

  }

  // Get some fruits
  harvest() {
    let mature_age = this._mature_age;
    let dying_age = this._dying_age;
    
    if (this._age < dying_age && this.age <= mature_age) {
      this._picked_fruit += 0;

    } else if (this._age < dying_age && this._age > mature_age) {
      let maxHarvest = this.fruits; // jumlah max petik

      let fruitBascket = [];
      let countFruitGood = 0; 
      let countFruitBad = 0; 
      
      for (let i = 0; i < maxHarvest; i++) {
        let newFruit = new Fruit();
        fruitBascket.push(newFruit);
      }

      for (let i = 0; i < fruitBascket.length; i++) {
        if (fruitBascket[i]._quality == 'good') {
          countFruitGood++;
        } else {
          countFruitBad++;
        }
      }

      this._good = countFruitGood;
      this._bad = countFruitBad;

    } else {
      this._status = false;
    }

  }

}


class Fruit {
  constructor() {
    // this._quality = quality;
    this._quality = this.checkQuality();
  }

  checkQuality() {
    let checkFruit = Math.floor(Math.random()*2); // 0 good, 1 bad
    if (checkFruit == 0) {
      return 'good';
    } else {
      return 'bad';
    }    
  }

}


module.exports = {
    FruitTree: FruitTree,
    Fruit: Fruit
}