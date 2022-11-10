// we use the "#" prefix on a #method(), get #getter() or set #setter() to make it private, and it can only be used on its own class

class user{
  //constructor
  constructor(name, age){
    this.name = name
    this.age = age
  }
  //methods
  #speak(){
    return 'Hello'
  }
  greeting(){
    return `${this.speak()} ${this.name}`
  }
  // getters & setters
  get #uAge(){
    return this.age
  }
  set #uAge(n){
    this.age = n
  }
}

const bebeloper1 = new user('David', 20)
console.log(bebeloper1.uAge)
console.log(bebeloper1.uAge = 15)