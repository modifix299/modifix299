import { useEffect } from 'react'
import { Link ,useParams ,useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../features/product/productSlice';

const ProductView = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
                                    <form >
                                        <input type="number" placeholder="0"/>
                                    </form>
                                    <Link to="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</Link>
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