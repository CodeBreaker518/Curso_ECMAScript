// Template literals let concatenate strings in an easier way than the traditional

// Traditional concatenate
let hello = 'hello';
let world = 'world'

let epicPhrase1 = hello + ' ' + world + '- traditional!'
console.log(epicPhrase1)

// Template literals
let epicPhrase2 = `${hello} ${world} - Template literals!` // `` - French quotation marks (comillas francesas)
console.log(epicPhrase2)

// Multi-line strings

let lorem = 'This is a string \n' + 'this is another line'

let lorem2 = `This is an epic phrase
  resuming epic phrase
`
console.log(lorem)
console.log(lorem2)
// OUTPUT

//This is a string 
//this is another line
//This is an epic phrase
//  resuming epic phrase


