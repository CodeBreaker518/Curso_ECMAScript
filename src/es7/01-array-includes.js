const numbers = [1, 5, 3, 2, 7, 4]

console.log(numbers.includes(4)) // true
console.log(numbers.includes(9)) // false

const list = ['Diego', 'David', 'Ana']

console.log(list.includes('Diego')) // true
console.log(list.includes('diego')) // false

//this part of code, made the first letter of the first element of the array into UpperCase, and the left to LowerCase
for (let name of list){
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  console.log(name)
}
