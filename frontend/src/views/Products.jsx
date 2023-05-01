import { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../features/product/productSlice';



const Products = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { products, isError, message } = useSelector(
        (state) => state.product
    )

    useEffect(() => {
        if (isError) {
            console.log(message)
        }
    
        dispatch(getProducts());   
       
    }, [navigate, dispatch, isError, message])   


    return (
        <>
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Custom and Carbon Fibre</p>
                                <h1>Products</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="product-section mt-150 mb-150">
                <div className="container">                

                    <div className="row product-lists">
                        {products.map((product) => (
                        <div className="col-lg-4 col-md-6 text-center strawberry" key={product._id}>
                            <div className="single-product-item">
                                <div className="product-image">
                                    <Link to={`/product/${product._id}`}><img src="assets/img/products/product-img-1.jpg" alt=""/></Link>
                                </div>
                                <h3>{product.productname}</h3>
                                <p className="product-price"><span></span> {product.price} Rs. </p>
                                <Link to={`/product/${product._id}`} className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</Link>
                            </div>
                        </div>
                        ))}
                    </div>

                    {/* <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="pagination-wrap">
                                <ul>
                                    <li><Link to="#">Prev</Link></li>
                                    <li><Link to="#">1</Link></li>
                                    <li><Link className="active" to="#">2</Link></li>
                                    <li><Link to="#">3</Link></li>
                                    <li><Link to="#">Next</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </>
    );
}

export default Products
