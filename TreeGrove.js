/*jshint esversion:6*/
/*jshint-W097*/
// "use strict"
class FruitTree {
  constructor(named,age,height,matureProduceAge,healthStatus) {
    this._name = named;
    this._age = age;
    this._height = height;
    this._totalFruits = 0;
    this._fruits = [];
    this._healtyStatus = healthStatus;
    this._harvested= '';
    this.matureProduceAge = matureProduceAge;
  }

  get ambilTotalFruit() {
    return this._totalFruits;
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get healtyStatus() {
    return this._healtyStatus;
  }

  get harvested() {
    return this._harvested;
  }

  grow() {
    this._age++;
    if(this._age < 10){
      this._height += Math.random();
    }else if(this._age === this.lastAge){
      this._healtyStatus = false;
    }
  }


  produceFruits(fruit_type) {

    //1. kalau fruit_type = manggo maka membuat object dari kelas manggo baru di push
    //2. kalau fruit_type = apple maka membuat object dari kelas apel baru di push

    if(this._age > this.matureProduceAge){
      this._totalFruits = Math.round(Math.random()*10)+1;
      this._fruits = [];
      for(let  i = 0 ; i < this._totalFruits ; i++){
        if(fruit_type === 'mango'){
          var mango  = new Mango();
          this._fruits.push(mango);
        }
        else if(fruit_type === 'apple'){
          var apple = new Apple();
          this._fruits.push(apple);
        }
        else{
          var pear = new Pear();
          this._fruits.push(pear);
        }
      }
    }
  }

  harvest() {
    var countGood = 0;
    var countBad = 0;

    for(let i = 0 ; i < this._fruits.length ;i++){
      if(this._fruits[i].quality === 'Good'){
        countGood++;
      }
      else{
        countBad++;
      }
    }

    this._harvested = `${countGood+countBad} (${countGood} good, ${countBad} bad.)`;
  }
}

class Fruit {
  constructor() {
    this.quality = this.randomQuality();
  }

  randomQuality() {
    let random = Math.round(Math.random());
    if(random === 0){
      return 'Good';
    }
    else{
      return 'Bad';
    }
  }
}



class MangoTree extends FruitTree {
  constructor(named,age,height,matureProduceAge,healthStatus) {
    super(named,age,height,matureProduceAge,healthStatus);
  }
}

class Mango extends Fruit{
  constructor() {
    super();
  }
}

class AppleTree extends FruitTree {
  constructor(named,age,height,matureProduceAge,healthStatus) {
    super(named,age,height,matureProduceAge,healthStatus);
  }

}

class Apple extends Fruit{
  constructor() {
    super();
  }
}


class PearTree extends FruitTree {
  constructor(named,age,height,matureProduceAge,healthStatus) {
    super(named,age,height,matureProduceAge,healthStatus);
  }

}

class Pear extends Fruit{
  constructor() {
    super();
  }
}

class TreeGrove{
  constructor(){
    this.pohon = [];
  }

  input_tree(named,age,height,matureAge,healthStatus){
    if(named === 'MangoTree'){
      this.pohon.push(new MangoTree(named,age,height,matureAge,healthStatus));
    }
    else if(named === 'AppleTree'){
      this.pohon.push(new AppleTree(named,age,height,matureAge,healthStatus));
    }
    else if(named === 'PearTree'){
      this.pohon.push(new PearTree(named,age,height,matureAge,healthStatus));
    }
  }

  show_ages(){
    for(let i = 0 ; i < this.pohon.length ;i++){
      console.log(this.pohon[i]._age);
    }
  }

  show_trees(){
    for(let i = 0 ; i < this.pohon.length ;i++){
      console.log(this.pohon[i]._name);
    }
  }

  mature_trees(){
    for(let i = 0 ; i < this.pohon.length;i++){
      if(this.pohon[i].age > this.pohon[i].matureProduceAge){
        console.log(this.pohon[i]._name);
      }
    }
  }

  dead_trees(){
    for(let i = 0 ; i < this.pohon.length;i++){
      if(_healtyStatus === false){
        console.log(this.pohon[i]._name);
      }
    }
  }

  next_year(){
    for(let i = 0 ; i < this.pohon.length;i++){
      this.pohon[i].grow();
    }
  }

}

var groove = new TreeGrove();
groove.input_tree('MangoTree',3,1.8,7,true);
groove.input_tree('MangoTree',5,2.4,12,true);
groove.input_tree('AppleTree',4,1.2,5,true);
groove.input_tree('PearTree',7,2,15,true);

console.log(groove.next_year())
