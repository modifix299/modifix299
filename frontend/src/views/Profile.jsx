import React from 'react'

const Profile = () => {
    return (
        <>
        	<div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <h1>Profile</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-from-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-5 mb-lg-0">
                            <div className="form-title">
                                <h2>Have you any question?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore, esse natus!</p>
                            </div>
                            <div id="form_status"></div>
                            <div className="contact-form">
                                <form  id="fruitkha-contact" >
                                    <p>
                                        <input type="text" placeholder="Name" name="name" id="name"/>
                                        <input type="email" placeholder="Email" name="email" id="email"/>
                                    </p>
                                    <p>
                                        <input type="tel" placeholder="Phone" name="phone" id="phone"/>
                                        <input type="text" placeholder="Subject" name="subject" id="subject"/>
                                    </p>
                                    <p><textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea></p>
                                    <input type="hidden" name="token" value="FsWga4&@f6aw" />
                                    <p><input type="submit" value="Submit"/></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile