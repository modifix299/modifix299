import {useDispatch, useSelector} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
    const { items } = useSelector(state => state.cart)
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userItems = items.filter(item => item.user === user._id);

    const isDisabled = items.length === 0 ? true : false;
    const goToCheckout = () => {
        navigate('/checkout');
    }
  
    return (
    <>
        <div className="breadcrumb-section breadcrumb-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="breadcrumb-text">
                            <p>Custom & Fibre Made</p>
                            <h1>Cart</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="cart-section mt-150 mb-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="cart-table-wrap">
                            <table className="cart-table">
                                <thead className="cart-table-head">
                                    <tr className="table-head-row">
                                        {/* <th className="product-remove"></th> */}
                                        <th className="product-image">Product Image</th>
                                        <th className="product-name">Name</th>
                                        <th className="product-price">Price</th>
                                        <th className="product-quantity">Quantity</th>
                                        {/* <th className="product-total">Total</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {userItems?.map((item,key) => (
                                            <tr className="table-body-row" key={key}>
                                                {/* <td className="product-remove"><Link to="#"><i className="far fa-window-close"></i></Link></td> */}
                                                <td class="product-image"><img src={item.image[0].image} alt=""/></td>
                                                <td className="product-name">{item.name}</td>
                                                <td className="product-price">Rs. {item.price}</td>                                             
                                                <td className="product-total">{item.quantity}</td>                            
                                            </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="cart-buttons d-flex justify-content-end">
                                <button onClick={goToCheckout} disabled={isDisabled} className="checkoutbtn" >Check Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </>
  )
}

export default Cart