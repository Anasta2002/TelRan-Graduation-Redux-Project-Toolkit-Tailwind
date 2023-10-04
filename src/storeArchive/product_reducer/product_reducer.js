const GET_PRODUCT = 'GET_PRODUCT'

export const getProductAction = payload => ({type: GET_PRODUCT, payload})

export const product_reducer = (state = [], action) => {
    if(action.type === GET_PRODUCT) {
        return action.payload
    }
    else return state
}