"use strict";

class Fruit {
  constructor() {
    this.quality = Math.floor(Math.random() * 10) % 2 == 0
      ? 'good'
      : 'bad';
  }
}

module.exports = Fruit;
