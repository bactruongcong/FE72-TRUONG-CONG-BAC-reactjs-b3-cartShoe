import React, { Component } from 'react';
import ProductItem from './ProductItem';
import Data from '../assets/data.json';
class ProductList extends Component {
    renderProduct = () => {
        return this.props.propProduct.map( (item) => {
            return <div key = {item.id} className = "col-4">
                        <ProductItem propProduct = {item} selectProduct = {this.props.selectProduct} addTocart = {this.props.addTocartProduct}/>
                    </div>
        });
    }
    render() {
      
        return (
            <div className='container'>
                <div className='row'>
                    {this.renderProduct()}
                </div>
               
            </div>
        );
    }
}

export default ProductList;