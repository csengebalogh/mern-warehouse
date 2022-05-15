import * as api from '../api'

// Action Creators 

export const getProducts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchProducts()

        dispatch({ type: 'FETCH_ALL', payload: []})
    } catch (error) {
        console.log(error.message)
    }
}

export const createProduct = (product) => async (dispatch) => {
    
    try {
        const { data } = await api.createProduct(product)
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

