class MangoTree {
  constructor(name, age, height, matureAge, healthyStatus) {
    this._name = name
    this._age = age
    this._height = height
    this._fruitCap = 10
    this._fruitStock = 0
    this._pickedFruits = []
    this._fruitBasket = []
    this._healthyStatus = healthyStatus
    this._matureAge = matureAge
    this._oldAge = 10
    this._maxAge =15
    // this._good = 0
    // this._bad = 0

  }
  get age() {
    return this._age
  }

  get height() {
    return this._height
  }

  get fruits() {
    return this._fruitStock
  }

  get healtyStatus() {
    return this._healthyStatus
  }

  get harvested() {
    return this._pickedFruits
  }

  get fruitcap() {
    return this._fruitCap
  }
  grow() {
    if (this._age < this._maxAge) {
      this._age += 1
    }
    if (this._age <= this._oldAge) {
      this._height += Number((Math.random()*3).toFixed(1))
    } /*Math.floor(Math.random()*3)*/
    if (this._age >= this._matureAge) {
      this.produceFruits()
    }
    if (this._age === this._maxAge) {
      this._healthyStatus = false
    }


  }

  // Produce some mangoes
  produceFruits() {
    var fruitBasket = []
    this._fruitStock = Math.floor(Math.random()* this._fruitCap)
    for (var i = 0; i < this._fruitStock; i++) {
      let randomQual = Math.floor(Math.random()*2)
      if (randomQual === 0) {
        fruitBasket.push(0)
      } else {
        fruitBasket.push(1)
      }
    }
    this._fruitBasket = fruitBasket
  }

  // Get some fruits
  harvest() {
    var bad = 0;
    var good = 0;
    var cekQual = this._fruitBasket
    for (var i = 0; i < cekQual.length; i++) {
      let Qual = new Mango (cekQual[i])
      if (Qual.statQuality() === 'good') {
        good += 1
      } else {
        bad += 1
      }
    }
    this._pickedFruits = `${this._fruitStock} (${good} good, ${bad} bad)`;
  }
}

class Mango {
  constructor(quality) {
    this._quality = quality
  }
  statQuality() {
    if (this._quality === 1) {
      return 'good'
    } else {
      return 'bad'
    }
  }
}

module.exports = MangoTree
