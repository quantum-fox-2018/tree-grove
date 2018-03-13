"use strict"

class FruitTree {
    constructor(treeName, age, plantTree, mature, healthyStatus, maxAge, maxheight) {
        this._treeName = treeName;
        this._age = age;
        this._plantTree = plantTree;
        this._mature = mature;
        this._healthyStatus = healthyStatus;
        this._maxAge = maxAge;
        this._maxHeight = maxheight;
        this._fruits = [];
    }

    get name() {
        return this._treeName;
    }

    get age() {
        return this._age;
    }

    get planTree() {
        return this._plantTree;
    }

    get mature() {
        return this._mature;
    }

    get healthyStatus() {
        return this._healthyStatus;
    }

    get maxAge() {
        return this._maxAge;
    }

    get maxheight() {
        return this._maxheight;
    }

    // Grow the tree
    grow() {
        let addHeight = Math.random() * (0.7 - 0.1) + 0.1;

        // age
        this._age += 1;

        // height
        if (this._age <= this._mature) {
            this._plantTree += addHeight;
        } else {
            this._plantTree = this._maxHeight;
        }

        // max age
        if (this._age >= this._maxAge) {
            this._healthyStatus = false;
        }
    }

    // Produce some fruit
    produceFruit() {
        let totalFruit = Math.round(Math.random() * (20 - 1) + 1);

        for (let i = 0; i < totalFruit; i++) {
            if (this._treeName === 'ManggoTree') {
                let mango = new Mango();
                this._fruits.push(mango);
            }

            if (this._treeName === 'AppleTree') {
                let apple = new Apple();
                this._fruits.push(apple);
            }

            if (this._treeName === 'PearTree') {
                let pear = new Pear();
                this._fruits.push(pear);
            }
        }

    }

    // Get some fruits
    harvest() {
        this._harvested = this._fruits.length;

        for (let i = 0; i < this.fruits.length; i++) {
            if (this.fruits[i]._quality == "good") {
                this._goodQuality++;
            } else if (this.fruits[i]._quality == "bad") {
                this._badQuality++;

            }
        }
        this._fruits = [];
    }

    resetBadOrGood() {
        this._badQuality = 0;
        this._goodQuality = 0;
    }

}

class Fruit {
    constructor() {
        this._quality = this.badOrGood();
    }

    get quality() {
        return this._quality;
    }

    badOrGood() {
        let badOrGood = Math.round(Math.random() * (1 - 0) + 1);

        if (badOrGood === 1) {
            return 'good';
        } else {
            return 'bad';
        }
    }
}

module.exports = {
    FruitTree,
    Fruit
};