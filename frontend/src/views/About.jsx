import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>We sale modification parts</p>
                                <h1>About Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="feature-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="featured-text">
                                <h2 className="pb-3">Why <span className="orange-text">MODIFIX</span></h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 mb-4 mb-md-5">
                                        <div className="list-box d-flex">
                                            <div className="list-icon">
                                                <i className="fas fa-shipping-fast"></i>
                                            </div>
                                            <div className="content">
                                                <h3>Home Delivery</h3>
                                                <p>Home delivery available.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                                        <div className="list-box d-flex">
                                            <div className="list-icon">
                                                <i className="fas fa-money-bill-alt"></i>
                                            </div>
                                            <div className="content">
                                                <h3>Best Price</h3>
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                                        <div className="list-box d-flex">
                                            <div className="list-icon">
                                                <i className="fas fa-briefcase"></i>
                                            </div>
                                            <div className="content">
                                                <h3>Custom Box</h3>
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="list-box d-flex">
                                            <div className="list-icon">
                                                <i className="fas fa-sync-alt"></i>
                                            </div>
                                            <div className="content">
                                                <h3>On the Spot Fixing</h3>
                                                <p>We are ready to service you wherever</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="shop-banner">
                <div className="container">
                    <h3>Big Offers From MODIFIX ! <br/>for<span className="orange-text"> MT-15</span></h3>
                    {/* <div className="sale-percent"><span>Sale! <br/> Upto</span>50% <span>off</span></div>
                    <Link to="shop.html" className="cart-btn btn-lg">Shop Now</Link> */}
                </div>
            </section>

            <div className="mt-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="section-title">
                                <h3>Team<span className="orange-text">MODIFIX</span></h3>
                                <p>About Us</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-team-item">
                                <div className="team-bg team-bg-1"></div>
                                <h4>Achchuthan <span>XXX</span></h4>
                                <ul className="social-link-team">
                                    {/* <li><Link to="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><Link to="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    <li><Link to="#" target="_blank"><i className="fab fa-instagram"></i></a></li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-team-item">
                                <div className="team-bg team-bg-2"></div>
                                <h4>Sarujan <span>XXX</span></h4>
                                <ul className="social-link-team">
                                    {/* <li><Link to="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><Link to="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    <li><Link to="#" target="_blank"><i className="fab fa-instagram"></i></a></li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-team-item">
                                <div className="team-bg team-bg-3"></div>
                                <h4>Jencika <span>XXX</span></h4>
                                <ul className="social-link-team">
                                    {/* <li><Link to="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><Link to="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    <li><Link to="#" target="_blank"><i className="fab fa-instagram"></i></a></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
        </>
    )
}

export default About