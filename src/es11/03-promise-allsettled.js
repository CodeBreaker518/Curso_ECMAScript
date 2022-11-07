const promise1 = new Promise( (simon, nel) => nel('nel') )
const promise2 = new Promise( (simon, nel) => simon('simon') )
const promise3 = new Promise( (simon, nel) => simon('simon 2') )

Promise.allSettled([promise1,promise2,promise3])
  .then(response => console.log(response))

// => output
// [
//   { status: 'rejected', reason: 'nel' },
//   { status: 'fulfilled', value: 'simon' },
//   { status: 'fulfilled', value: 'simon 2' }
// ]

// rejected - rechazado
// fulfilled - completado