import { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

const Cart = () => {
    return (
        <>    

            <div className="top-header-area" id="sticker">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 text-center">
                            <div className="main-menu-wrap">
                                {/* logo */}
                                <div className="site-logo">
                                    <Link to="index.html">
                                        <img src="frontend/public/img/modifix.png" alt=""/>
                                    </Link>
                                </div>
                            

                                {/* menu start */}
                                <nav className="main-menu">
                                    <ul>
                                        <li className="current-list-item"><Link to="home.html">Home</Link>
                                        </li>
                                        <li><Link to="about.html">Products</Link></li>
                                        <li><Link to="contact.html">About</Link>
                                        </li>
                                        <li><Link to="cart.html">Cart</Link></li>
                                        <li>
                                            <div className="header-icons">
                                                <a className="shopping-cart" href="cart.html"><i className="fas fa-shopping-cart"></i></a>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                                <a className="mobile-show search-bar-icon" href="#"><i className="fas fa-search"></i></a>
                                <div className="mobile-menu"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	
	
            {/* breadcrumb-section */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Custom and Carbon Fibre</p>
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
                                            <td className="product-image"><img src="assets/img/products/product-img-1.jpg" alt=""/></td>
                                            <td className="product-name"></td>
                                            <td className="product-price"></td>
                                            <td className="product-quantity"><input type="number" placeholder="0"/></td>
                                            <td className="product-total">1</td>
                                        </tr>
                                        <tr className="table-body-row">
                                            <td className="product-remove"><Link to="#"><i className="far fa-window-close"></i></Link></td>
                                            <td className="product-image"><img src="assets/img/products/product-img-1.jpg" alt=""/></td>
                                            <td className="product-name"></td>
                                            <td className="product-price"></td>
                                            <td className="product-quantity"><input type="number" placeholder="0"/></td>
                                            <td className="product-total">1</td>
                                        </tr>
                                        <tr className="table-body-row">
                                            <td className="product-remove"><Link to="#"><i className="far fa-window-close"></i></Link></td>
                                            <td className="product-image"><img src="assets/img/products/product-img-1.jpg" alt=""/></td>
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
                                        <tr className="total-data">
                                            <td><strong>Subtotal: </strong></td>
                                            <td>$500</td>
                                        </tr>
                                        <tr className="total-data">
                                            <td><strong>Shipping: </strong></td>
                                            <td>$45</td>
                                        </tr>
                                        <tr className="total-data">
                                            <td><strong>Total: </strong></td>
                                            <td>$545</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="cart-buttons">
                                    <Link to="cart.html" className="boxed-btn">Update Cart</Link>
                                    <Link to="checkout.html" className="boxed-btn black">Check Out</Link>
                                </div>
                            </div>

                            <div className="coupon-section">
                                <h3>Apply Coupon</h3>
                                <div className="coupon-form-wrap">
                                    <form action="index.html">
                                        <p><input type="text" placeholder="Coupon"/></p>
                                        <p><input type="submit" value="Apply"/></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	

            {/* logo carousel */}
            {/* <div className="logo-carousel-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="logo-carousel-inner">
                                <div className="single-logo-item">
                                    <img src="assets/img/company-logos/1.png" alt=""/>
                                </div>
                                <div className="single-logo-item">
                                    <img src="assets/img/company-logos/2.png" alt=""/>
                                </div>
                                <div className="single-logo-item">
                                    <img src="assets/img/company-logos/3.png" alt=""/>
                                </div>
                                <div className="single-logo-item">
                                    <img src="assets/img/company-logos/4.png" alt=""/>
                                </div>
                                <div className="single-logo-item">
                                    <img src="assets/img/company-logos/5.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
	

	        {/* footer */}
            <div className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box about-widget">
                                <h2 className="widget-title">About us</h2>
                                <p>Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box get-in-touch">
                                <h2 className="widget-title">Get in Touch</h2>
                                <ul>
                                    <li>34/8, East Hukupara, Gifirtok, Sadan.</li>
                                    <li>support@fruitkha.com</li>
                                    <li>+00 111 222 3333</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box pages">
                                <h2 className="widget-title">Pages</h2>
                                <ul>
                                    <li><Link to="index.html">Home</Link></li>
                                    <li><Link to="about.html">About</Link></li>
                                    <li><Link to="services.html">Shop</Link></li>
                                    <li><Link to="news.html">News</Link></li>
                                    <li><Link to="contact.html">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box subscribe">
                                <h2 className="widget-title">Subscribe</h2>
                                <p>Subscribe to our mailing list to get the latest updates.</p>
                                <form action="index.html">
                                    <input type="email" placeholder="Email"/>
                                    <button type="submit"><i className="fas fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	
	
            {/* copyright */}
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <p>Copyrights &copy; 2019 - <Link to="https://imransdesign.com/">Imran Hossain</Link>,  All Rights Reserved.<br/>
                                Distributed By - <Link to="https://themewagon.com/">Themewagon</Link>
                            </p>
                        </div>
                        <div className="col-lg-6 text-right col-md-12">
                            <div className="social-icons">
                                <ul>
                                    <li><Link to="#" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="#" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="#" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                                    <li><Link to="#" target="_blank"><i className="fab fa-linkedin"></i></Link></li>
                                    <li><Link to="#" target="_blank"><i className="fab fa-dribbble"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};


export default Cart