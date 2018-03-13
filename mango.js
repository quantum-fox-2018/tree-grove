const Fruit = require('./fruit.js')

class Mango extends Fruit{
  // Produce a mango
  constructor(quality) {
    super(quality)
  }
}

module.exports = Mango
