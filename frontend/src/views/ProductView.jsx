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

    const onAddToCart = () => {
        if (!product || !product._id || !user || !user._id) {
          console.error('Product or user data is missing or invalid.');
          return;
        }      
        const data = {
          id: product._id,
          quantity: quantity,
          user: user._id
        };      
        dispatch(addCartItemSuccess(data));
        toast.success('Cart Item Added!');
      };
      
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
                                {/* <img src={product.images[0].image} alt=""/> */}
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="single-product-content">
                                <h3>{product.name}</h3>
                                <h6>{product.description}</h6>
                                <p>MODIFIX now offers convenient home delivery and modification services right at your doorstep with free of delivery and service charges. To ensure the utmost safety of our products during shipping, each item is carefully wrapped in a custom-designed box. </p>
                                <p className="single-product-pricing"><span></span> Rs. {product.price}</p>
                                
                                <div className="single-product-form">
                                <div className="stockCounter d-inline">
                                    <span className="btnminus" onClick={decreaseQty} >-</span>
                                    <input type="number" className="form-control count d-inline" value={quantity} readOnly />
                                    <span className="btnplus" onClick={increaseQty}>+</span>
                                </div>
                                <button type="button"
                                    disabled={product.stockquantity===0?true:false} 
                                    onClick={onAddToCart}
                                    className="addtocartbtn"
                                    ><i className="fas fa-shopping-cart"></i>Add to Cart
                                </button>
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



                     