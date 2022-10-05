// promises

const anotherFunction = () => {
  return new Promise((resolve, reject) =>{
    if (true){
      resolve('Hey!')  
    }else{
      reject('whooops')
    }
  })
}

anotherFunction() //anotherFunction() returns .then()
  .then(response => console.log(response)) //promise method .then() receive parameters
  .catch(err => console.log(err))
  
//esta usando una funcion callback, callback es una funcion que usa a otra funcion como argumento.
//En cuanto a los metodos then y catch, estos son metodos que pertenecen al objeto promise.
//Estos metodos son usados para en la promise (anotherFunction), para mostrar el estado de esta promesa, 
//que puede tener 2 estados, aceptada, que la retorna el METODO THEN y RECHAZADA que la retorna el METODO CATCH


// another example

// sync (direct data from movies)
const movies = [{
  id:1, 
  title: 'Iron Man', 
  year: 2008
},{ 
  id:2, 
  title: 'Spider-man: Homecoming', 
  year: 2017
},{
  id:3, 
  title: 'Avengers: Endgame', 
  year: 2009
}]

// const getMovies = () => {
//   return movies
// }

const getMovies = () => {
  return new Promise ( (resolve,reject) => {
    setTimeout( () => { // simulating async
    resolve(movies)
  }, 1500)
})
}
getMovies()
  .then( (movies) => console.log(movies))

// una promesa recibe como parametro a una funcion que a su vez recibe 2 parametros, resolve y reject
// setTimeout() nos ayuda a simular el asincronismo con un delay de 1500ms, se puede agregar mathrandom para simularlo mejor