import React, { Component } from 'react';

class ProductDetail extends Component {
    render() {
        const {name, price, description, quantity, image } = this.props.selectedProduct;
        return (
            <div>
              <div className='row'>
                <div className='col-4'>
                    <h1 className='display-4'>{name}</h1>
                    <img src={image} className='w-100' />
                </div>
                <div className='col-8'>
                    <h1>Thông tin sản phẩm</h1>
                    <p>Tên: {name}</p>
                    <p>Giá: {price}</p>
                    <p>Chi tiết: {description}</p>
                    <p>Số lượng: {quantity}</p>
                    </div>
              </div>
            </div>
        );
    }
}

export default ProductDetail;