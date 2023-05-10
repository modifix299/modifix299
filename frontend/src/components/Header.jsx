import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Authenticated from './Authenticated';
import {useDispatch, useSelector} from 'react-redux';

const Header = () => {
    const { items:cartItems } = useSelector(state => state.cartState)
    const dispatch = useDispatch();
    const navigate = useNavigate();


    return (
        <>
        	<div className="top-header-area" id="sticker">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 text-center">
                            <div className="main-menu-wrap">
                                <div className="site-logo1">
                                    <Link to="/">
                                        <img src="img/modifix.png" alt=""/>
                                    </Link>
                                </div>

                                <nav className="main-menu">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="products">Products</Link></li>
                                        <li><Link to="about">About</Link></li>                                                                              
                                        <li><Link to="cart">Cart{cartItems.length}</Link></li>
                                        <Authenticated/>
                                    </ul>
                                </nav>
                                {/* <Link className="mobile-show search-bar-icon" to="#"><i className="fas fa-search"></i></Link>
                                <div className="mobile-menu"></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header