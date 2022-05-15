import axios from 'axios'

//url pointing to backend
const URL = 'http://localhost:5000/products'

export function fetchProducts() {
  axios.get(URL)   
}

