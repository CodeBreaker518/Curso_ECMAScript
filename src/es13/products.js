// importing fetch
import fetch from "node-fetch"

// call of the API
const response = await fetch('https://api.escuelajs.co/api/v1/products')

//make response into a json format
const products = await response.json()

//export the products
export {products}