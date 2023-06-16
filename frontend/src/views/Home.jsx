import React from 'react'
import { Link } from 'react-router-dom';
import video from "../../src/img/modifix.mp4"


const Home = () => {
    return (
        <>
            <div className="hero-area hero-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 offset-lg-2 text-center">
                            <div className="hero-text">
                                <div className="hero-text-tablecell">
                                    <p className="subtitle">Custom & Fibre Made</p>
                                    <h1>Motorbike Modification Parts</h1>
                                    <div className="hero-btns">
                                        {/* <Link to="products" className="boxed-btn">Products</Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

            
            {/* <div style={{backgroundColor: "#dfddde"}}>
            <div className="slider1">
                <div className="slide-track1">
                    <div className="slide1">
                        <img src="assets/img/modifix-pics/f11.jpg" alt="" />
                    </div>
                    <div className="slide1">
                        <img src="assets/img/modifix-pics/f13.jpg" alt="" />
                    </div>
                    <div className="slide1">
                        <img src="assets/img/modifix-pics/f12.jpg" alt="" />
                    </div>
                    <div className="slide1">
                        <img src="assets/img/modifix-pics/f11.jpg" alt="" />
                    </div>
                    <div className="slide1">
                        <img src="assets/img/modifix-pics/f13.jpg" alt="" />
                    </div>
                    <div className="slide1">
                        <img src="assets/img/modifix-pics/f12.jpg" alt="" />
                    </div>
                </div>
            </div>
            </div> */}

            <div className="list-section pt-80 pb-80">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div className="list-box d-flex align-items-center">
                                <div className="list-icon">
                                    <i className="fas fa-shipping-fast"></i>
                                </div>
                                <div className="content">
                                    <h3 className="h3own" >Free Shipping</h3>
                                    <p className="h3own" >All Over The Island</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0" style={{ marginLeft: "60px" }}>
                            <div className="list-box d-flex align-items-center">
                                <div className="list-icon">
                                    <i className="fas fa-phone-volume"></i>
                                </div>
                                <div className="content">
                                    <h3 className="h3own" >24/7 Support</h3>
                                    <p className="h3own" >Get support all day</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" style={{ marginLeft: "130px" }}>
                            <div className="list-box d-flex justify-content-start align-items-center">
                                <div className="list-icon">
                                    <i className="fas fa-sync"></i>
                                </div>
                                <div className="content">
                                    <h3 className="h3own" >Replace</h3>
                                    <p className="h3own" >Replacable If Damaged</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




            <section className="container container-section">
                <div className="container-video">

                    <video width="600" height="360" controls autoPlay muted style={{ objectFit: 'cover' }}>
                        <source src={video} type="video/mp4" autoplay />
                    </video>
                </div>

                <div className="content-para-main">
                    <h2 className="subtitle">Unveiling <span style={{ color: "orange" }}>Modifix</span>{" "}</h2>
                    <p className="para">
                    Welcome to Modifix, your one-stop destination for high-quality fiber-made custom modification parts for motorbikes. We offer a wide range of innovative and stylish products designed to enhance the performance and aesthetics of your ride. With our free home delivery service, you can conveniently get your hands on our top-notch parts without leaving your doorstep. We also provide expert installation services and post-sales support to ensure a seamless experience for our valued customers. Experience the thrill of customization with Modifix today and take your motorbike to the next level.
                    </p>
                </div>
            </section>

            <section className="shop-banner">
                <div className="container">
                    <h3>Offers From MODIFIX !... <br />for<span className="orange-text"> Classic Models</span></h3>
                    <div className="sale-percent"><span>Sale! <br /> Upto</span>50% <span>off</span></div>
                    <Link to="products" className="cart-btn btn-lg">Shop Now</Link>
                </div>
            </section>


            {/* logo carousel */}
            <div className="slider">
                <div className="slide-track">
                    <div className="slide">
                        <img src="assets/img/company-logos/1.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="assets/img/company-logos/2.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="assets/img/company-logos/3.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="assets/img/company-logos/4.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="assets/img/company-logos/5.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="assets/img/company-logos/6.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="assets/img/company-logos/7.png" alt="" />
                    </div>

                    <div className="slide">
                        <img src="assets/img/company-logos/8.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="assets/img/company-logos/1.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="assets/img/company-logos/2.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="assets/img/company-logos/3.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="assets/img/company-logos/4.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="assets/img/company-logos/5.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="assets/img/company-logos/6.png" alt="" />
                    </div>
                </div>
            </div>
            {/* end logo carousel */}
        </>
    )
}

export default Home