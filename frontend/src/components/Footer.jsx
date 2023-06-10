import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="footer-box about-widget">
                                <h2 className="widget-title">About us</h2>
                                <p>A passionate team on motorbikes and their modifications; Which is ready to service you as your dreams and wishes.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="footer-box get-in-touch">
                                <h2 className="widget-title">Get in Touch</h2>
                                <ul>
                                    <li>Chankaanai,Jaffna,SriLanka.</li>
                                    <li>modifix299@gmail.com</li>
                                    <li>+94766410882</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="footer-box pages">
                                <h2 className="widget-title">Pages</h2>
                                <ul>
                                    <li><Link to="index">Home</Link></li>
                                    <li><Link to="about">About</Link></li>
                                    <li><Link to="products">Products</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4">
                            <div class="footer-box pages">
                                <h2 class="widget-title">Subscribe</h2>
                                <p>Subscribe to our mailing list to get the latest updates.</p>
                                <form action="index.html">
                                    <input type="email" placeholder="Email" />
                                        <button type="submit"><i class="fas fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
