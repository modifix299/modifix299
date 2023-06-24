import React, { useState } from 'react';


const Profile = () => { 


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        zipcode: ''
    });

    const { name, email, phone, address, zipcode } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const validateEmail = (email) => {
        // Regular expression for email validation
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        // Regular expression for phone number validation
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    };

    const validateZipcode = (zipcode) => {
        // Regular expression for zipcode validation (5 digits)
        const zipcodeRegex = /^[0-9]{5}$/;
        return zipcodeRegex.test(zipcode);
    };

    const isFormValid = () => {
        if (name.trim() === '') {
            return false;
        }
        if (!validateEmail(email)) {
            return false;
        }
        if (!validatePhone(phone)) {
            return false;
        }
        if (address.trim() === '') {
            return false;
        }
        if (!validateZipcode(zipcode)) {
            return false;
        }
        return true;
    };

    return (
        <>
            <div className="breadcrumb-section breadcrumb-bg">
                {/* Breadcrumb code */}
            </div>

            <div className="contact-from-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-5 mb-lg-0">
                            <div className="form-title">
                                <h2>Profile Update</h2>
                            </div>
                                <div id="form_status"></div>
                                    <div className="contact-form">
                                        <form id="fruitkha-contact" onSubmit={handleSubmit}>
                                            <p>
                                                <input
                                                    type="text"
                                                    placeholder="Name"
                                                    name="name"
                                                    id="name"
                                                    value={name}
                                                    onChange={handleChange}
                                                />
                                                <input
                                                    type="email"
                                                    placeholder="Email"
                                                    name="email"
                                                    id="email"
                                                    value={email}
                                                    onChange={handleChange}
                                                />
                                            </p>
                                            <p>
                                                <input
                                                    type="tel"
                                                    placeholder="Phone"
                                                    name="phone"
                                                    id="phone"
                                                    value={phone}
                                                    onChange={handleChange}
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Address"
                                                    name="address"
                                                    id="address"
                                                    value={address}
                                                    onChange={handleChange}
                                                />
                                            </p>
                                            <p>
                                                <input
                                                    name="zipcode"
                                                    id="zipcode"
                                                    placeholder="Zipcode"
                                                    value={zipcode}
                                                    onChange={handleChange}
                                                />
                                            </p>
                                            
                                            <p>
                                                <input
                                                    type="submit"
                                                    value="Submit"
                                                    disabled={!isFormValid()}
                                                />
                                            </p>
                                        </form>
                                    </div>
                            
                            <div className="cart-section mt-150 mb-150">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="cart-table-wrap">
                                                <table className="cart-table">
                                                    <thead className="cart-table-head">
                                                        <tr className="table-head-row">
                                                            <th className="product-remove">Order ID</th>                                                            
                                                            <th className="product-image">Order Status</th>
                                                            <th className="product-name">Products</th>
                                                            <th className="product-total">Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>                                    
                                                            <tr>
                                                                <td className="product-remove">1001</td>                                                            
                                                                <td className="product-name">Processing</td>
                                                                <td className="product-price">Visor R15 V3</td>                                             
                                                                <td className="product-total">Rs 3000</td>                            
                                                            </tr>                                                       
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
