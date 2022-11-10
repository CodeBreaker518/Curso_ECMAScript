// generate rules or filters to search, filter , etc

const regex = /\b(Apple)+\b/g

const fruits = 'Apple, Banana, Kiwi, Apple, Orange, etc, etc, etc.'

for (const match of fruits.matchAll(regex)){
  console.log(match)
}
// output
// [
//   'Apple',
//   'Apple',
//   index: 0,
//   input: 'Apple, Banana, Kiwi, Apple, Orange, etc, etc, etc.',
//   groups: undefined
// ]
// [
//   'Apple',
//   'Apple',
//   index: 21,
//   input: 'Apple, Banana, Kiwi, Apple, Orange, etc, etc, etc.',
//   groups: undefined
// ]