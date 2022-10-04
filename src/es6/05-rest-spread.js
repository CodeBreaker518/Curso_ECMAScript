// destructuring

// arrays destructuring
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


// object destructuring
let user = {
  username: 'codebreaker',
  age: '20'
}
let {username, age} = user

console.log(username, user.age)
//output
//codebreaker 20



// for-of loop destructuring
const array = ['a', 'b']
for (const [index,element] of array.entries()){
  console.log(index,element)
  //output
  //0 a
  //1 b
}