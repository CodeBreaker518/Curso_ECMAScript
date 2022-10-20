const fnAsync = () => {
  return new Promise((resolve, reject) =>{
    (true)
      ? setTimeout(() => resolve('Async!!'), 2000) //if true
      : reject(new Error('Error!'))                //else
  })
}

const anotherFn = async () => {
  const something = await fnAsync()
  console.log(something)
  console.log('Hello')
}

console.log('Before')
anotherFn()
console.log('After')

// Output

// first prints

//Before
//After

//then after 2 seconds prints

//Before
//After
//Async!!
//Hello

const sendData = () => {
  return new Promise((resolve, reject) =>{
    (true)
    ? setTimeout(() => resolve('Data saved!'), 2000)
    : reject(new Error("Error: Couldn't send data!!"))
  })
}

const getData = async () =>{
  const data = await sendData()
  console.log(data)
}
console.log('=> Data send!')
getData()
console.log('Waiting data...')

// getData() returns sendData() resolve promise after 2 seconds
