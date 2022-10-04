var lastName = 'Diego'
lastName = 'Dieguito'
console.log(lastName)

let fruit = 'apple'
fruit = 'orange'
console.log(fruit)

const animal = 'dog'
animal = 'cat'
console.log(animal)

const fruits = () => {
  if (true){
    var fruit1 = 'apple' //Global scope || function scope
    let fruit2 = 'kiwi' //Local Scope || block scope || function scope
    const fruit3 = 'Banana'// Local Scope || block scope || function scope
  } //fruit2 & fruit3 cannot be printed because they have Local Scope, but fruit1 has Global Scope
  console.log(`${fruit1} ${fruit2} ${fruit3}`)
}
fruits()