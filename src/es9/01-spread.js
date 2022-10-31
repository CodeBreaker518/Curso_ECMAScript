const user = {
  username: 'codebreaker', 
  age: 20, 
  country: 'MX'
}
const {username, ...values} = user

console.log(username)
console.log(values)

//example of copy with spread operator

const original = { data: [1, [2, 3], 4, 5] }
const copy = structuredClone(original)

original === copy // false
original["data"] === copy["data"] // false