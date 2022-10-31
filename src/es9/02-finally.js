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
  .then( response => console.log(response) ) //promise method .then() receive parameters
  .catch( err => console.log(err) )
  .finally( () => console.log('Finally') )