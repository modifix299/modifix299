import { useEffect, useState } from 'react'
import { Link ,useParams ,useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../features/product/productSlice';
import { toast } from "react-toastify";
import { addCartItem } from "../actions/cartActions";


const ProductView = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const increaseQty = () => {
        const count = document.querySelector('.count')
        if(product.stockquantity ===0 ||  count.valueAsNumber >= product.stockquantity) return;
        const qty = count.valueAsNumber + 1;
        setQuantity(qty);
    }
    const decreaseQty = () => {
        const count = document.querySelector('.count')
        if(count.valueAsNumber === 1 ) return;
        const qty = count.valueAsNumber - 1;
        setQuantity(qty);
    }

    const { product, isError, message } = useSelector(
        (state) => state.product
    )

    useEffect(() => {
        if(id){
            dispatch(getProduct(id));   
        }
        if (isError) {
            console.log(message)
        }    
       
    }, [navigate, dispatch, id, isError, message])   

    return (
        <>
        	<div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>See more Details</p>
                                <h1>{product.productname}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        	<div className="single-product mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="single-product-img">
                                <img src="../assets/img/products/product-img-1.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="single-product-content">
                                <h3>{product.productname}</h3>
                                <p className="single-product-pricing"><span></span> Rs. {product.price}</p>
                                <div className="single-product-form">
                                <form action="index.html">
                                    <div className="stockCounter d-inline">
                                        <span className="btn btn-dark minus" onClick={decreaseQty} >-</span>
                                        <input type="number" className="form-control count d-inline" value={quantity} readOnly />
                                        <span className="btn btn-dark plus" onClick={increaseQty}>+</span>
                                    </div>
                                </form>
                                <Link to="cart.html" className="cart-btn" disabled={product.stock===0?true:false}
                                        onClick={()=>{
                                            dispatch(addCartItem(product._id, quantity))
                                            toast('Cart Item Added!',{
                                                type: 'success',
                                                position: toast.POSITION.BOTTOM_CENTER
                                            })
                                        }}>
                                    <i className="fas fa-shopping-cart"></i> Add to Cart</Link>     
                                {/* <Link to={`/product/${product._id}`}
                                    <button type="button" id="cart_btn" 
                                        disabled={product.stock==0?true:false} 
                                        onClick={()=>{
                                            dispatch(addCartItem(product._id, quantity))
                                            toast('Cart Item Added!',{
                                                type: 'success',
                                                position: toast.POSITION.BOTTOM_CENTER
                                                })
                                            }}
                                        className="btn btn-dark d-inline ml-4">Add to Cart
                                    </button>
                                </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
        
        </>
    );
}



export default ProductView



                     
