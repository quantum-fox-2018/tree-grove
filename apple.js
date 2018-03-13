const Fruit = require('./fruit.js')

class Apple extends Fruit{
  constructor(quality) {
    super(quality)
  }
}

module.exports = Apple
