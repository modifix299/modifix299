import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Authenticated from './Authenticated';


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
                                         
                                        <li className='nav home'><Link to="/" >Home</Link></li>
                                        <li className='nav products '><Link to="products">Products</Link></li>
                                        <li className='nav about'><Link to="about">About</Link></li> 
                                         
                                        {/* <li><Link to="/cart">Contact Us</Link></li>                                                                              */}
                                        <li className='add'><Link to="/cart"  className="fas fa-shopping-cart "></Link></li>
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