import React from 'react'
import { Link } from 'react-router-dom';
import Authenticated from './Authenticated';
import { useState } from 'react';

const Header = () => {

    const [ fix, setFix ] = useState(false)

    function setFixed(){
        if (window.scrollY >= 290) {
            setFix(true)
        } else {
            setFix(false)
        }
    }
    
    window.addEventListener("scroll", setFixed)
    return (
        <>
            <div className={fix ? 'top-header-area fixed':'top-header-area'} id="sticker">
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
                                        {/* <li><Link to="/cart">Contact Us</Link></li>                                                                              */}
                                        <li><Link to="/cart">Cart</Link></li>
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