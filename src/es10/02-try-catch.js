try {
  hello()
} catch (error) {
  console.log(error)
}
// output 
// ReferenceError: hello is not defined

try {
  anotherFn() //does not exist so
} catch {
  console.log('This is an error') //enters the catch and outputs:
}
//This is an error