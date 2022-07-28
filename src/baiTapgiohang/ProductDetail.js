import React, { Component } from 'react';
import Styles from "./style.module.css"
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
                <h5 className="modal-title" id="exampleModalLabel">Chi tiết sản phẩm</h5>
                </div>
                <div className="modal-body">
                <div className='row'>
                <div className='col-4'>
                    <img src={image} className='w-100' />
                    <span className={Styles.detailName}>{name}</span>
                </div>
                <div className={`${Styles.detailProduct} col-8`}>
                    <h5>Thông tin sản phẩm</h5>
                    <p className={Styles.detailName}>Tên: {name}</p>
                    <p className={Styles.priceDetail}>Giá: {price}</p>
                    <p>Chi tiết: {description}</p>
                    <p>Số lượng: {quantity}</p>
                    </div>
                </div>
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
             
                </div>
            </div>
            </div>
        </div>
         </div>
        );
    }
}

export default ProductDetail;