class AppleTree {

    constructor(name, age, height, produceAge, healtyStatus) {

        this._name = name
        this._age = age // umur pohon
        this._height = height // tinggi pohon
        // this._maxCapaticyFruit = 40 // kapasitas maksimum berbuah
        this._produceAge = produceAge
        // this._setOfFruits = [] //kumpulan buah
        // this._fruitAmount = 0 // jumlah buah
        this._healtyStatus = healtyStatus //status pohon
    }

    get age() {

        return this._age
    }

    get height() {

        return this._height
    }

    get fruitAmount() {

        return this._fruitAmount
    }

    get healtyStatus() {

        return this._healtyStatus
    }

    get setOfFruits() {

        let good = 0
        let bad = 0

        for (let i = 0; i < this._setOfFruits.length; i++) {
            
            if(this._setOfFruits[i]._quality === 'good') {

                good += 1
            } else {

                bad += 1
            }
        }

        return `${this._setOfFruits.length} (${good} good, ${bad} bad)`
    }

    grow () {

        let stopGrowAge = 10 

        if (this._age <= stopGrowAge) {

            this._age += 1
            this._height += Math.floor(Math.random()*3)
        } 

        if (this._age >= stopGrowAge) {

            this._healtyStatus = false
        }       
    }

    produceFruit() {

        if (this._age >= this._produceAge && this._fruitAmount <= this._maxCapaticyFruit) {

            return this._fruitAmount += Math.floor(Math.random()*this._maxCapaticyFruit)
        }
    }

    fruitAmount() {

        let fruitAmount = this._fruitAmount
        this._setOfFruits = []

        for (let i = 0; i < fruitAmount; i++) {
            
            this._setOfFruits.push(new Apple())   
        }

        this._fruitAmount = 0
    }
}

class Apple {

    constructor () {

        this._quality = this.quality()
    }

    quality() {

        let fruit = Math.floor(Math.random()*2)

        if (fruit === 1) {

            return 'good'
        } else {

            return 'bad'
        }
    }
}

// console.log('The tree is alive! :smile:')

// let appleTree = new AppleTree()

// do {

//     appleTree.grow()
//     appleTree.produceFruit()
//     appleTree.fruitAmount()
//     console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruit harvested = ${appleTree.setOfFruits}`)
// } while(appleTree.healtyStatus != false)

// console.log('The tree has met its end')

module.exports = AppleTree