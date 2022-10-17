// creating a list with items
const array = ['perro', 'gato', 'elefante']

const list = new Set(array)

list.add('item 1')
list.add('item 2').add('item 3')

console.log(list)
//Set(6) { 'perro', 'gato', 'elefante', 'item 1', 'item 2', 'item 3' }

// the good thing about set-add lists is that, 
// it doesn't allow repeated items on the list

console.log(list.has('gato')) // true
console.log(list.size) // 6
list.delete('item 1') // deleting item 1 from list

console.log(list)
//Set(5) { 'perro', 'gato', 'elefante', 'item 2', 'item 3' }