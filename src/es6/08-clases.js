// class declaration
class User {}
// instance of a class
// const newUser = new user()

class user {
  //methods
  greeting(){
    return 'Hello!'
  }
}

const codebreaker = new user()

console.log(codebreaker.greeting())

const bebeloper = new user()

console.log(bebeloper.greeting())

// constructor
class user{
  //constructor
  constructor(){
    console.log('nuevo usuario')
  }
  greeting(){
    return 'Hello!'
  }
}

const david = new user()


// this - makes reference to the father element which contains it

class user {
  constructor(name){
    this.name = name
  }
  //methods
  speak(){
    return `Hello`
  }
  greeting(){
    return `${this.speak()} ${this.name}`
  }
}

const brad = new user('Brad')
console.log(brad.greeting())

// setters and getters

class user{
  //constructor
  constructor(name, age){
    this.name = name
    this.age = age
  }
  //methods
  speak(){
    return 'Hello'
  }
  greeting(){
    return `${this.speak()} ${this.name}`
  }
  get uAge(){
    return this.age
  }
  set uAge(n){
    this.age = n
  }
}

const bebeloper1 = new user('David', 20)
console.log(bebeloper1.uAge)
console.log(bebeloper1.uAge = 15)

