const promise1 = new Promise( (simon, nel) => nel('nel') )
const promise2 = new Promise( (simon, nel) => simon('simon') )
const promise3 = new Promise( (simon, nel) => simon('simon 2') )

Promise.any([promise1,promise2,promise3])
  .then(response => console.log(response))
// => output
//simon

// Promise.any returns the first promise it returns a resolve(simon)