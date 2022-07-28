import React, { Component } from 'react';

class ProductDetail extends Component {
    render() {
        const {name, price, description, quantity, image } = this.props.selectedProduct;
        // const {name, price, description, quantity, image } = this.props.product;
        return (
         <div>
        {/* Modal */}
        <div className="modal fade" id="modalDetail" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                </div>
                <div className="modal-body">
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
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
                </div>
            </div>
            </div>
        </div>
         </div>
        );
    }
}

export default ProductDetail;