const numbers = [1, 5, 3, 2, 7, 4]

console.log(numbers.includes(4)) // true
console.log(numbers.includes(9)) // false

const list = ['Diego', 'David', 'Ana']

console.log(list.includes('Diego')) // true
console.log(list.includes('diego')) // false

// lowercase list with map

const lowerList = list.map(item => item.toLowerCase())

console.log(lowerList.includes('diego')) // true
