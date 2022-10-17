
function* iterate(array) {
  for (let value of array){
    yield value
  }
}
const it = iterate(['Diego','David','Ana','Alan','Jennifer'])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)

