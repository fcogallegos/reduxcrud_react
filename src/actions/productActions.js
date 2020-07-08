import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from '../types';

import clientAxios from '../config/axios';
import Swal from 'sweetalert2';

//Create new products
export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch( addProduct() );

        try {
            //insert in the API
            await clientAxios.post('/products', product);

            //if all is fine, update the state
            dispatch( addProductSuccess(product) );

            //alert
            Swal.fire(
                'Correct',
                'The product was added correctly',
                'success'
            );
        } catch (error) {
            console.log(error);
            //if there is an error change the state
            dispatch( addProductError(true) );

            //alert of error
            Swal.fire({
                icon: 'error',
                title: 'There was an error',
                text: 'There was an error, try again!'
            });
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
const addProductError = status => ({
    type: ADD_PRODUCT_ERROR,
    payload: status
});