import * as api from '../api'

// Action Creators 

const getProducts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchProducts()

        dispatch({ type: 'FETCH_ALL', payload: []})
    } catch (error) {
        console.log(error.message)
    }

}
export default getProducts