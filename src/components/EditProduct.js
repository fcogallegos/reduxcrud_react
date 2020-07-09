import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProductAction } from '../actions/productActions';
import { useHistory } from 'react-router-dom';

const EditProduct = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    //new state of product
    const [ product, saveProduct ] = useState({
        name: '',
        price: ''
    });

    //product to edit
    const productedit = useSelector(state => state.products.editproduct);
    

    //fulling the state automatically
    useEffect( () => {
        saveProduct( productedit );
    }, [productedit]);

    //read the form data
    const onChangeForm = e => {
        saveProduct({
            ...product,
            [e.target.name] : e.target.value
        });
    }


    const { name, price } = product;

    const submitEditProduct = e => {
        e.preventDefault();
        

        dispatch( editProductAction(product) );
        history.push('/');
    }

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Edit Product
                        </h2>

                        <form
                            onSubmit={ submitEditProduct }
                        >
                            <div className="form-group">
                                <label>Product Name</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Product Name"
                                    name="name"
                                    value={name}
                                    onChange={ onChangeForm }
                                />    
                            </div>

                            <div className="form-group">
                                <label>Product Price</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Product Price"
                                    name="price"
                                    value={price}
                                    onChange={ onChangeForm }
                                />    
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Save changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditProduct;