// destructuring

//arrays destructuring
let fruits = ['pineapple', 'kiwi', 'strawberry']
let [a,b,c] = fruits
console.log(a, fruits[2])
//output
//pineapple strawberry

//access only to the last element of the array (or the one u want)
let [,,fruit] = fruits 
console.log(fruit) 
//output
//strawberry


//object destructuring
let user = {
  username: 'codebreaker',
  age: '20'
}
let {username, age} = user

console.log(username, user.age)
//output
//codebreaker 20



//for-of loop destructuring
const array = ['a', 'b']
for (const [index,element] of array.entries()){
  console.log(index,element)
  //output
  //0 a
  //1 b
}

//spread operator

let person = {name:'Diego', age: '20'}
let country = 'MX'

let data = { id: 1,...person, country}

console.log(data)
//output
//{ id: 1, name: 'Diego', age: '20', country: 'MX' }

//utiliza el operador de propagación para crear una copia del array que utilice una referencia 
//en memoria diferente al original, y asi modificar la copia, no el original.

const originalArray = [1,2,3,4,5]
const copyArray = [...originalArray]
copyArray[0] = 0 //re declaration of copyArray with 0 on its position 0

console.log(originalArray) // [1,2,3,4,5]
console.log(copyArray) // [0,2,3,4,5]
console.log(originalArray === copyArray)  // false


// rest parameters

const sum = (num, ...values) =>{
  console.log(values)
  console.log(num + values[0])
  return num + values[0]
}

sum(1, 1, 2, 3)
//output
//[1, 2, 3]
//2