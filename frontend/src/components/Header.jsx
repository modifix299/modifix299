
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Authenticated from './Authenticated';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../img/modifix.png';

const Header = () => {
    const [fix, setFix] = useState(false);
    const cartItems = useSelector(state => state.cart.items);

    function setFixed() {
        if (window.scrollY >= 290) {
            setFix(true);
        } else {
            setFix(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", setFixed);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", setFixed);
        };
    }, []);

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);   
    

    return (
        <>
            <div className={fix ? 'top-header-area fixed' : 'top-header-area'} id="sticker">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 text-center">
                            <div className="main-menu-wrap">
                                <div className="site-logo1">
                                    <Link to="/">
                                        <img src={logo} alt="" />
                                    </Link>
                                </div>

                                <nav className="main-menu">
                                    <ul>
                                        <li className='nav home'><Link to="/">Home</Link></li>
                                        <li className='nav products '><Link to="products">Parts</Link></li>
                                        <li className='nav about'><Link to="about">About</Link></li>
                                        {cartItems.length > 0 && (
                                        <li className='add'>
                                        <Link to="/cart" className="ml-3">
                                            <span id="cart">
                                               <FontAwesomeIcon icon={faShoppingCart} />
                                            </span>
                                            <span className="ml-1" id="cart_count">
                                               {cartItems.length}
                                            </span>
                                        </Link>
                                        </li>
                                        )}
                                        <Authenticated />
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
