//traditional Method
function newUser (name,age,country) {
  var name = name || 'Diego' // 'Diego' is a default param
  var age = age || 20 // || 20 - means that 20 is a default param
  var country = country || 'MX' // 'MX' is a default param
  console.log(`${name} ${age} ${country}`)
}
newUser() 
//output
//Diego 20 MX
newUser('David', 18, 'Colombia')
//output
//David 18 Colombia

// so if the function doesn't receive parameters, it will take the default ones (if it does has them)



//New Method with ECMAScript 6
const newAdmin = (name='Diego', age='19', country='CL') => console.log(name, age, country)

newAdmin()
//output
//Diego 19 CL

newAdmin('Raul', 22, 'Ecuador')
//output
//Raul 22 Ecuador