import React, { Component } from 'react';

class Cart extends Component {
   
    renderCart = () => {
        const data = this.props.propProduct;
        const html = data.map( (item) => {
            return (
                            <tr  key={item.product.id}>
                                <td>
                                    {item.product.id}
                                </td>
                                <td>
                                    {item.product.name}
                                </td>
                                <td>
                                    <img src={item.product.image} style={{width: 50}}/>
                                </td>
                                <td>
                                    <button className='btn btn-info' onClick={ () => this.props.downVolume(item.product.id)}>-</button>
                                    <span>{item.volume}</span>
                                    <button className='btn btn-info' onClick={ () => this.props.upVolume(item.product.id)}>+</button>
                                </td>
                                <td>
                                    {item.product.price}
                                </td>
                                <td>
                                    {item.volume * item.product.price}
                                </td>
                                <td>
                                <button className='btn btn-danger' onClick={ () => this.props.deleteToCartItem(item.product.id)}>X</button>
                                </td>
                            </tr>   
            )
        });
        return html;
    }

    render() {
        return (
           <div>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                <div className="modal-content ">
                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Giỏ hàng</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Poduct Id</th>
                                <th>Tên sản phâmr</th>
                                <th>Hình ảnh</th>
                                <th>Số lượng</th>
                                <th>Giá</th>
                                <th>Tổng tiền</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                           {this.renderCart()}
                        </tbody>
                    </table>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary"  onClick={ () => this.props.clearCart()}>Clear</button>
                    </div>
                </div>
                </div>
            </div>
            </div>

        );
    }
}

export default Cart;