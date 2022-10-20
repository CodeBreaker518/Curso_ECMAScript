const string = "Laugh"
console.log(string.padStart(10, 'ha'))
console.log(string.padEnd(10, 'ha'))
//Output
//hahahLaugh - 10 characters max fills before string
//Laughhahah - 10 characters max fills after string

const hello = 'Hello'
console.log(hello.padStart(6, '_'))
console.log(hello.padEnd(9, '_'))
// output
//_Hello
//Hello_