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
                                <h1>Parts</h1>
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
                                { product.images[0] ? (
                                    <Link to={`/product/${product._id}`}><img src={product.images[0].image} alt=""/></Link>
                                    ):(<span>No Image</span>)}
                                </div>
                                <h3>{product.name}</h3>
                                <p className="product-price"><span></span> Rs. {product.price} </p>
                                <Link to={`/product/${product._id}`} className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</Link>
                            </div>
                        </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}

export default Products
