import { useEffect, useState } from 'react'
import { Link ,useParams ,useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../features/product/productSlice';
import { addCartItemSuccess } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

const ProductView = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    

    const { product, isError, message } = useSelector(
        (state) => state.product
    )

    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        if(id){
            dispatch(getProduct(id));   
        }
        if (isError) {
            console.log(message)
        }    
       
    }, [navigate, dispatch, id, isError, message])   

    const increaseQty = () => {
        const count = document.querySelector('.count')
        if(product.stock ==0 ||  count.valueAsNumber >= product.stock) return;
        const qty = count.valueAsNumber + 1;
        setQuantity(qty);
    }
    const decreaseQty = () => {
        const count = document.querySelector('.count')
        if(count.valueAsNumber == 1 ) return;
        const qty = count.valueAsNumber - 1;
        setQuantity(qty);
    }

    const onAddToCart = () => {        
        const data = {
            id: product._id,
            quantity: quantity,
            user: user._id
        }
        dispatch(addCartItemSuccess( data))
        toast.success('Cart Item Added!')
    }
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
                                <div className="stockCounter d-inline">
                                    <span className="btn btn-danger minus" onClick={decreaseQty} >-</span>

                                    <input type="number" className="form-control count d-inline" value={quantity} readOnly />

                                    <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                                </div>
                                <button type="button"
                                    disabled={product.stockquantity===0?true:false} 
                                    onClick={onAddToCart}
                                    className="cart-btn btn btn-primary d-inline ml-4"
                                    ><i className="fas fa-shopping-cart"></i>Add to Cart</button>
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



                     