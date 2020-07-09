import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCESS,
    DOWNLOAD_PRODUCTS_ERROR,
    GET_PRODUCT_REMOVE,
    PRODUCT_REMOVED_SUCCESS,
    PRODUCT_REMOVED_ERROR
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


//function that download the products of the database
export function getProductsAction() {
    return async (dispatch) => {
        dispatch( downloadProducts() );

        try {
            const asnwer = await clientAxios.get('/products');
            dispatch( downloadProductsSuccess(asnwer.data) );
        } catch (error) {
            console.log(error);
            dispatch( downloadProductsError() );
        }
    }
}

const downloadProducts = () => ({
    type: START_DOWNLOAD_PRODUCTS,
    payload: true
});

const downloadProductsSuccess = products => ({
    type: DOWNLOAD_PRODUCTS_SUCCESS,
    payload: products
});

const downloadProductsError = () => ({
    type: DOWNLOAD_PRODUCTS_ERROR,
    payload: true
});

//select and remove the product
export function removeProductAction(id) {
    return async (dispatch) => {
        dispatch( getProductRemove(id) );


    }
}

const getProductRemove = id => ({
    type: GET_PRODUCT_REMOVE,
    payload: id
});