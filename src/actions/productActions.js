import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCESS,
    DOWNLOAD_PRODUCTS_ERROR,
    GET_PRODUCT_REMOVE,
    PRODUCT_REMOVED_SUCCESS,
    PRODUCT_REMOVED_ERROR,
    GET_PRODUCT_EDIT,
    START_EDITION_PRODUCT,
    PRODUCT_EDITED_SUCCESS,
    PRODUCT_EDITED_ERROR
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

        try {
            await clientAxios.delete(`/products/${id}`);
            dispatch( removeProductSuccess() );

            //if is removed it, show alert 
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
        } catch (error) {   
            console.log(error);
            dispatch( removeProductError() );
        }
    }
}

const getProductRemove = id => ({
    type: GET_PRODUCT_REMOVE,
    payload: id
});

const removeProductSuccess = () => ({
    type: PRODUCT_REMOVED_SUCCESS
});

const removeProductError = () => ({
    type: PRODUCT_REMOVED_ERROR,
    payload: true
});


//put on product in edition
export function getProductEdit(product) {
    return (dispatch) => {
        dispatch( getProductEditAction(product) );
    }
}
const getProductEditAction = product => ({
    type: GET_PRODUCT_EDIT,
    payload: product
});


//edit a register in the api and state
export function editProductAction(product) {
    return async (dispatch) => {
        dispatch( editProduct() );

        try {
            await clientAxios.put(`/products/${product.id}`, product);
            dispatch( editProductSuccess(product) );
        } catch (error) {
            
        }
    }
}
const editProduct = () => ({
    type: START_EDITION_PRODUCT
});

const editProductSuccess = product => ({
    type: PRODUCT_EDITED_SUCCESS,
    payload: product
});