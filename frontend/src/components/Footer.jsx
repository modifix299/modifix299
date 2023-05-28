import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="footer-box about-widget">
                                <h2 className="widget-title">About us</h2>
                                <p>A passionate team on motorbikes and their modifications; Which is ready to service you as your dreams and wishes.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="footer-box get-in-touch" style={{marginLeft :"200px"}}>
                                <h2 className="widget-title">Get in Touch</h2>
                                <ul>
                                    <li>Chankaanai,Jaffna,SriLanka.</li>
                                    <li>modifix299@gmail.com</li>
                                    <li>+94766410882</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="footer-box pages" style={{marginLeft :"250px"}}>
                                <h2 className="widget-title">Pages</h2>
                                <ul>
                                    <li><Link to="index">Home</Link></li>
                                    <li><Link to="about">About</Link></li>
                                    <li><Link to="products">Products</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer