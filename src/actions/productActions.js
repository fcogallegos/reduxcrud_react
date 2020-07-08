import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from '../types';


//Create new products
export function createNewProductAction(product) {
    return (dispatch) => {
        dispatch( addProduct() );

        try {
            dispatch( addProductSuccess(product) );
        } catch (error) {
            dispatch( addProductError(true) );
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
});


//if the product is saved in database
const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
});

//if there was an error
const addProductError = () => ({

});