const users = {
  codebreaker:{
    country: 'MX'
  },
  gndx:{
    country: 'CO'
  }
}

console.log(users.codebreaker)
// => output
// { country: 'MX' }
console.log(users.bebeloper?.country)
// => output
// undefined

// optional chaining avoid run break errors by requesting optional properties , this helps a lot working with frameworks like React.js
// because in the future, that value could be added, updated, or deleted.