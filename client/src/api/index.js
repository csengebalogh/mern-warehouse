import axios from 'axios'

//url pointing to backend
const URL = 'http://localhost:5000/products'

export const fetchProducts = () => {
  return axios.get(URL)   
}

export const createProduct = (newProduct) => {
  return axios.post(URL, newProduct)
}