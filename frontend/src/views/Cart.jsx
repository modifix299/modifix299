import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { decreaseCartItemQty, increaseCartItemQty,removeItemFromCart } from '../features/cart/cartSlice';




const Cart = () => {

    const {items} = useSelector(state => state.cartState)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const increaseQty = (item) => {
        const count = item.quantity;
        if(item.stock ==0 ||  count >= item.stock) return;
        dispatch(increaseCartItemQty(item.product))
    }
    const decreaseQty = (item) => {
        const count = item.quantity;
        if(count == 1) return;
        dispatch(decreaseCartItemQty(item.product))
    }

    const checkoutHandler = () =>{
        navigate('/login?redirect=shipping')
    }

    return (
    <>
        <div className="breadcrumb-section breadcrumb-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="breadcrumb-text">
                            <p>Custom And Carbon Fibre</p>
                            <h1>Cart</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* cart */}
        <div className="cart-section mt-150 mb-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="cart-table-wrap">
                            <table className="cart-table">
                                <thead className="cart-table-head">
                                    <tr className="table-head-row">
                                        <th className="product-remove"></th>
                                        <th className="product-image">Product Image</th>
                                        <th className="product-name">Name</th>
                                        <th className="product-price">Price</th>
                                        <th className="product-quantity">Quantity</th>
                                        <th className="product-total">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="table-body-row">
                                        <td className="product-remove"><Link to="#"><i className="far fa-window-close"></i></Link></td>
                                        <td className="product-image"><img src="" alt=""/></td>
                                        <td className="product-name"></td>
                                        <td className="product-price"></td>
                                        <td className="product-quantity"><input type="number" placeholder="0"/></td>
                                        <td className="product-total">1</td>
                                    </tr>
                                    <tr className="table-body-row">
                                        <td className="product-remove"><Link to="#"><i className="far fa-window-close"></i></Link></td>
                                        <td className="product-image"><img src="" alt=""/></td>
                                        <td className="product-name"></td>
                                        <td className="product-price"></td>
                                        <td className="product-quantity"><input type="number" placeholder="0"/></td>
                                        <td className="product-total">1</td>
                                    </tr>
                                    <tr className="table-body-row">
                                        <td className="product-remove"><Link to="#"><i className="far fa-window-close"></i></Link></td>
                                        <td className="product-image"><img src="" alt=""/></td>
                                        <td className="product-name"></td>
                                        <td className="product-price"></td>
                                        <td className="product-quantity"><input type="number" placeholder="0"/></td>
                                        <td className="product-total">1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="total-section">
                            <table className="total-table">
                                <thead className="total-table-head">
                                    <tr className="table-total-row">
                                        <th>Total</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <tr className="total-data">
                                        <td><strong>Subtotal: </strong></td>
                                        <td></td>
                                    </tr> */}
                                    {/* <tr className="total-data">
                                        <td><strong>Shipping: </strong></td>
                                        <td></td>
                                    </tr> */}
                                    <tr className="total-data">
                                        <td><strong>Total: </strong></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="cart-buttons">
                                <Link to="cart.html" className="boxed-btn">Update Cart</Link>
                                <Link to="checkout.html" className="boxed-btn black">Check Out</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* end cart */}
    </>
  )
}

export default Cart