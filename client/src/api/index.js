import axios from 'axios'

//url pointing to backend
const URL = 'http://localhost:5001/products'

export const fetchProducts = () => {
  return axios.get(URL)   
}

export const createProduct = (newProduct) => {
  return axios.post(URL, newProduct)
}

// api call for U

export const updateProduct = (id, updatedProduct) => {
  return axios.patch(`${URL}/${id}`, updatedProduct)
}
