class AppleTree {
    constructor(treeName, firstAge, firstHeight, matureAge, healtyStatus) {
      this.growPerYear = 0.5
      this.matureAge = matureAge
      this.fruitCapacity = 9
      this.age = firstAge
      this.height = firstHeight
      this.fruitStock = 0
      this.pickedFruits = []
      this.fruitStat = []
      this.healthyStatus = healtyStatus
      this.maxAge = matureAge +4
      this.treeName = 'apel'
    }
    get umur() {
      return this.age
    }

    get tinggi() {
      return this.height
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
      return this._fruitCapacity
    }
    get fruitname(){
      return this.fruitName
    }
    grow() {
      if (this.age < this.maxAge) {
        this.age ++
      }
      }


    // Produce some mangoes
    produce() {

      this._fruitStock = Math.floor(Math.random()* this.fruitCapacity)+2
  //    console.log(this._fruitStock , this.fruitCapacity)
      var fruitStat = [];
      for (var i = 0; i < this._fruitStock; i++) {
        let randomQual = Math.floor(Math.random()*2)
  //      console.log(randomQual)
        if (randomQual === 0) {
          fruitStat.push(0)
        } else {
          fruitStat.push(1)
        }
      }
  //    console.log('produksi', fruitStat)
      this._fruitStat =  fruitStat
    }


    // Get some fruits
    harvest() {
        var cekBuah = this._fruitStat
        var counterBad = 0;
        var counterGood = 0;
  //      console.log(cekBuah)
        for(var i=0; i < cekBuah.length; i++){
          let stat = new Mango(cekBuah[i])
          let cekstat = stat.statqual()
  //        console.log(cekstat)
            if(cekstat === 'good'){
              counterGood += 1
            } else {
              counterBad += 1
            }
        }
        this._pickedFruits = `${this._fruitStock} (${counterGood} good, ${counterBad} bad)`;
      }
  }



//
class Apple {
  // Produce a mango
  constructor(quality) {
    this._quality = quality
  }
  statqual(){
//    console.log('quality',this._quality);
    if(this._quality === 1){
      return "good"
    }else{
      return "bad"
    }
  }
}

module.exports =  AppleTree
