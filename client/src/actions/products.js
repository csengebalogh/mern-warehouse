import * as api from '../api/index.js'

// Action Creators 

export const getProducts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchProducts()

        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const createProduct = (product) => async (dispatch) => {
    
    try {
        const { data } = await api.createProduct(product)
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updateProduct = (id, product) => async (dispatch) => {
    try {
        const { data } = await api.updateProduct(id, product)
        dispatch({ type: 'UPDATE', payload: data})
    } catch (error) {
        console.log(error)
    }
}

