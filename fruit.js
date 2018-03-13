
class Fruit {
    constructor() {
        this.quality = this.randomQuality();
    }
    randomQuality(){
        let valueRandom = Math.floor(Math.random()*2)
        if(valueRandom == 1){
            return 'good';
        } else {
            return 'bad'
        }
    }
}
  
class Mango extends Fruit{
    constructor() {
        super()
    }
}

class Apple extends Fruit {
    constructor() {
        super()
    }
}

class Pear extends Fruit {
    constructor(){
        super()
    }
}

module.exports = Fruit;