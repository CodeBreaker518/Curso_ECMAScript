let hello = '  Hola Mundo    '
// hello = hello.split(' ').join('')  // or
// hello = hello.replaceAll(' ','')
console.log(`Original:${hello}`)

console.log(`Modified:${hello.trimStart().trimEnd()}`)
// we can also use

// console.log(`Modified:${hello.trim()`) 
//it removes white spaces from both sides <-str->
