// enhanced object literals (mejora object literals)

function newUser (user, age, country, uId) {
  return {
    user,
    age,
    country,
    id: uId, //original propose ECMAScript5
  //uId  //enhanced propose ECMAScript6 
  }
}

console.log(newUser('codebreaker',20,'MX',1))
//output
//{ user: 'codebreaker', age: 20, country: 'MX', id: 1 }


// another example 
function dog(name, age) {
    this.name = name
    this.age = age
    this.barking = () => { return `${this.name} who is ${this.age} years old says WOOF`}
}//constructor

const kira = new dog('kira', 3) //creating an object called 'kira' with the constructor
console.log(kira)
console.log(kira.barking())
//output
//dog { name: 'kira', age: 3, barking: [Function (anonymous)] }
//kira who is 3 years old says WOOF

