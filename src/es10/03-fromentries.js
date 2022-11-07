// Object.entries() => converts an object to an array of arrays
// Object.fromEntries => converts an array of arrays to an object

const entries = new Map([['name','diego'],['age', 20]])

console.log(entries)
// output
//Map(2) { 'name' => 'diego', 'age' => 20 }

console.log(Object.fromEntries(entries)) //array of arrays converted into an object
// output
// { name: 'diego', age: 20 }