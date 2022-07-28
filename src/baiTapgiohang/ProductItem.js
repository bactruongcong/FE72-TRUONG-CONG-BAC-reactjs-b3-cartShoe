import React, { Component } from 'react';
import ProductDetail from './ProductDetail';

class ProductItem extends Component {
    render() {
        const {id, name, price, description, image} = this.props.propProduct;
        return (
            <div className='card mb-4 p-3'>
                <img src={image} className="w-100 d-block" alt=""/>
                <span>{name}</span>
                <span>{price}$</span>
                <div className='row'>
                    <button  className='col-6 btn btn-dark' onClick={() => this.props.addTocart(this.props.propProduct)}>Add to cart</button>
                    <button data-bs-toggle="modal" data-bs-target="#modalDetail" className='col-6 btn btn-warning' onClick={() => this.props.selectProduct(this.props.propProduct)}>Detail</button>
                </div>
               
            </div>
        );
    }
}

export default ProductItem;