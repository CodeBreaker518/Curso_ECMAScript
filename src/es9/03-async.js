async function* anotherGenerator() { //function* to make it a generator
  yield await Promise.resolve(1)
  yield await Promise.resolve(2)
  yield await Promise.resolve(3)
}
const other = anotherGenerator()
other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value))

setTimeout(() => {
  console.log('hello!')
}, 1200);

async function arrayOfNames(array){
  for await (let value of array){
    console.log(value)
  }
}
const names = arrayOfNames(['Diego','Raul','Miriam','Oscar'])
console.log('After')
