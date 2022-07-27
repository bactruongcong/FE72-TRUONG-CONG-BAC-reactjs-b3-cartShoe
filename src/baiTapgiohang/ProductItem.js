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
                    {/* <button className='col-6 btn btn-warning' onClick={() => this.props.selectProduct(this.props.propProduct)}>Detail</button> */}
                    <button  data-bs-toggle="modal" data-bs-target={"#modalDetail"+id} className='col-6 btn btn-warning'>Detail</button>
                </div>
                {/* Modal */}
                <div className="modal fade" id={"modalDetail"+id} tabIndex={-1}>
                    <div className="modal-dialog modal-xl">
                    <div className="modal-content ">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Giỏ hàng</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                        <ProductDetail product = {this.props.propProduct}/>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;