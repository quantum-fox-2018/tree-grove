class FruitTree {
    constructor(name, age, height, mature, health) {
        this._name = name  
        this._age = age
        this._height = height
        this._mature = mature
        this._healthStatus = health

        this._maxFruit = 20
        this._fruits = []
        this._harvested = 0
        this._maxHeight = 10
        
    }
  
    get age() {
      return this._age
    }
  
    get height() {
      return this._height.toFixed(1)
    }
  
    get fruits() {
      return this._fruits.join(',')
    }
  
    get healthyStatus() {
      this._healthStatus = this._age <= this._mature
      return this._healthStatus
    }
  
    get harvested() {
      return this._harvested
    }
  
  
    grow() {
      this._age++
      if(this._age <= this._maxHeight){
        this._height += Math.random()*2
      }
    }
  
    produceFruit() {
        let count = Math.floor(Math.random()*this._maxFruit)
        
        for (let i = 0; i < count; i++) {
          this._fruits.push(new Fruit())
        }
        return this._fruits
    }
  
    harvest() {
      let fruitsCount = this._fruits.length
      let countGood = 0
      let countBad = 0
  
      while (this._fruits.length > 0) {
        if (this._fruits[0]._quality === 'good')
          countGood++
        else{
          countBad++
        }
        this._fruits.shift()
      }
      return this._harvested = `${fruitsCount} (${countGood} good, ${countBad} bad)`
    }
  
  }
  
  class Fruit {
    constructor() {
        this._quality = this.checkQuality()
    }
    
    checkQuality(){
        let type = ['good','bad']
        let random = Math.floor(Math.random()* type.length)
        return type[random]
    }
  }


  module.exports = FruitTree