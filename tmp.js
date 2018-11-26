class Person {
  public name;
  constructor (name: String) {
    this.name = name;
  }
  eat() {
    console.log(this.name);
  }
}

let p1 = new Person('Harry');
p1.eat();


class Person {
  public myName: String;
  constructor (name: String) {
    this.myName = name;
  }
  eat() {
    console.log(this.myName);
  }
}
let p1 = new Person('Harry Potter');
p1.eat();
