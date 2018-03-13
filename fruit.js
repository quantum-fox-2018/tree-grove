class Fruit {
  constructor(){
    this._quality=this.checkQuality()
  }

  checkQuality(){
    let eachQuality=[0,1]
    let randQuality=eachQuality[Math.floor(Math.random()*eachQuality.length)]
    return randQuality
  }
}

module.exports = Fruit
