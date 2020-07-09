import React from 'react';
import { Link } from 'react-router-dom';

//Redux
import { useDispatch } from 'react-redux';
import { removeProductAction } from '../actions/productActions';

const Product = ({product}) => {
    const { name, price, id } = product;

    const dispatch = useDispatch();

    //confirm if want remove it
    const confirmRemoveProduct = id => {

        //ask the user


        //pass it to action 
        dispatch( removeProductAction(id) );
    }

    return ( 
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold">$ {price} </span></td>
            <td className="acciones">
                <Link to={`/products/edit/${id}`} className="btn btn-primary mr-2">
                    Edit
                </Link>
                <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={ () => confirmRemoveProduct(id) }
                >Delete</button>
            </td>
        </tr>
     );
}
 
export default Product;